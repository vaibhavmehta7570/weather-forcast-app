import React from 'react'
import Adapter from 'enzyme-adapter-react-16'
import { configure, shallow } from 'enzyme'
import renderer from 'react-test-renderer'
import WeatherApp from './WeatherApp'
configure({ adapter: new Adapter() })

describe('Should test WeatherApp.jsx', () => {
  test('render correctly WeatherApp component', () => {
    const rendererResponse = renderer.create(<WeatherApp />).toJSON()
    expect(rendererResponse).toMatchSnapshot()
  })

  test('should fetchWeatherData functions correctly', async () => {
    const WeatherAppInstance = shallow(<WeatherApp />).instance()
    expect(WeatherAppInstance.state.statusCode).toBe(200)
    WeatherAppInstance.setState({ city: 'mumbai' })
    await WeatherAppInstance.fetchWeatherData()
    WeatherAppInstance.state.weatherData.map((element) =>
      expect(element.city).toBe('mumbai')
    )
    expect(WeatherAppInstance.state.weatherData.length).toBe(5)
  })

  test('should fetchWeatherData gives proper errors', async () => {
    const WeatherAppInstance = shallow(<WeatherApp />).instance()
    expect(WeatherAppInstance.state.statusCode).toBe(200)
    WeatherAppInstance.setState({ city: 'DummyCity' })
    await WeatherAppInstance.fetchWeatherData()
    expect(WeatherAppInstance.state.weatherData.length).toBe(0)
    expect(WeatherAppInstance.state.statusCode).toBe(404)

    WeatherAppInstance.setState({ city: undefined })
    await WeatherAppInstance.fetchWeatherData()
    expect(WeatherAppInstance.state.weatherData.length).toBe(0)
    expect(WeatherAppInstance.state.statusCode).toBe(500)
  })

  test('should handleCityChange functions correctly', () => {
    const WeatherAppInstance = shallow(<WeatherApp />).instance()
    const mockEvent = {
      target: {
        value: 'dummyCity',
      },
    }
    expect(WeatherAppInstance.state.city).toBe('Bangalore')
    WeatherAppInstance.handleCityChange(mockEvent)
    expect(WeatherAppInstance.state.city).toBe('dummyCity')
  })
})
