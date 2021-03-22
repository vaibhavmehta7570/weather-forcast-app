import React, { Component } from 'react'
import SearchBar from './SearchBar'
import WeatherCard from './WeatherCard'
import ErrorBar from './ErrorBar'
import axios from 'axios'
import Loading from './Loading'

class WeatherApp extends Component {
  state = {
    weatherData: [],
    city: 'Bangalore',
    searchDone: false, //checks if API call to fetch weather has been made or not
    statusCode: 200,
    ErrorMessage: '',
    isLoading: false,
  }

  fetchWeatherData = async () => {
    try {
      const key = '1b1f3ba7c9c6cd45e39d115e78efacfb'
      const fetchUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${this.state.city}&appid=${key}&units=metric`
      let weatherData = await axios.get(fetchUrl)
      weatherData = weatherData.data.list

      //filter out day, city, temperature from API response
      weatherData.map(
        (dataElement, index, array) =>
          (array[index] = {
            day: dataElement.dt_txt.substr(0, dataElement.dt_txt.indexOf(' ')), //get date from dt_txt{date_time}
            city: this.state.city,
            temperatureMin: dataElement.main.temp.toFixed(1),
            temperatureMax: dataElement.main.temp.toFixed(1),
            desc: dataElement.weather[0].description,
            iconID: dataElement.weather[0].id,
            humidity: dataElement.main.humidity,
            windSpeed: dataElement.wind.speed,
          })
      )

      //filter temperature reading at particular time on everyday
      let weatherDataArray = weatherData.filter(
        (_dataElement, index) => index % 8 === 0
      )

      //get Max and Min temperature of each day
      var currIndexToChange = 0
      weatherData.forEach((element) => {
        if (
          element.day !== weatherDataArray[currIndexToChange].day &&
          currIndexToChange < 4
        )
          currIndexToChange++
        weatherDataArray[currIndexToChange].temperatureMax = Math.max(
          weatherDataArray[currIndexToChange].temperatureMax,
          element.temperatureMax
        )
        weatherDataArray[currIndexToChange].temperatureMin = Math.min(
          weatherDataArray[currIndexToChange].temperatureMin,
          element.temperatureMin
        )
      })

      //Add id property for every weather entry
      weatherDataArray.map(
        (_dataElement, index, array) => (array[index].id = index)
      )
      this.setState({
        weatherData: weatherDataArray,
        isLoading: false,
      })
    } catch (err) {
      //In case of any error, empty weatherData state and add erorr code and message to the state
      this.setState({ weatherData: [] })
      return err.response.data.cod === '404'
        ? this.setState({
            statusCode: 404,
            ErrorMessage:
              'Could not find weather for the city. Please try again',
            isLoading: false,
          })
        : this.setState({
            statusCode: 500,
            ErrorMessage: 'Server Error. Please try again',
            isLoading: false,
          })
    }
  }

  componentDidMount = () => {
    this.setState({
      isLoading: true,
      weatherData: [],
    })
    this.fetchWeatherData()
  }

  componentDidUpdate = () => {
    if (this.state.searchDone) {
      this.setState({
        isLoading: true,
        searchDone: false,
        statusCode: 200,
        weatherData: [],
      })
      this.fetchWeatherData()
    }
  }

  handleCityChange = (e) => {
    let prevState = this.state
    prevState.city = e.target.value
    const newState = prevState
    this.setState({ newState })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    e.stopPropagation()
    this.setState({ searchDone: true })
  }

  render() {
    return (
      <section className='weather-app'>
        <SearchBar
          onCityChange={this.handleCityChange}
          onSubmit={this.handleSubmit}
          input={this.state.city}
          statusCode={this.state.statusCode}
        />

        <div className='weathercard-container'>
          {this.state.weatherData.map((weather) => (
            <WeatherCard key={weather.id} weather={weather} />
          ))}
          {this.state.statusCode !== 200 && (
            <ErrorBar message={this.state.ErrorMessage} />
          )}
          {this.state.isLoading && <Loading />}
        </div>
      </section>
    )
  }
}

export default WeatherApp
