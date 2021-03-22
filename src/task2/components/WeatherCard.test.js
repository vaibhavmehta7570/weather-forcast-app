import React from 'react'
import Adapter from 'enzyme-adapter-react-16'
import { configure } from 'enzyme'
import WeatherCard from './WeatherCard'
import renderer from 'react-test-renderer'
configure({ adapter: new Adapter() })

describe('Should test WeatherCard.jsx', () => {
  const mockValues = {
    id: 0,
    city: 'goa',
    day: '2021-01-28',
    desc: 'few clouds',
    humidity: 49,
    iconID: 801,
    temperatureMax: 29,
    temperatureMin: 20.2,
    windSpeed: 3.16
  }

  test('should render correctly weatherCard component', () => {
    const renderResponse = renderer
      .create(<WeatherCard weather={mockValues} />)
      .toJSON()
    expect(renderResponse).toMatchSnapshot()
  })

  test('should render correctly weatherCard component with 699 < iconID < 800', () => {
    const mockValues = {
      id: 0,
      city: 'goa',
      day: '2021-01-28',
      desc: 'few clouds',
      humidity: 49,
      iconID: 771,
      temperatureMax: 29,
      temperatureMin: 20.2,
      windSpeed: 3.16
    }
    const renderResponse = renderer
      .create(<WeatherCard weather={mockValues} />)
      .toJSON()
    expect(renderResponse).toMatchSnapshot()
  })

  test('should render correctly weatherCard component with 899 < iconID <1000', () => {
    const mockValues = {
      id: 0,
      city: 'goa',
      day: '2021-01-28',
      desc: 'few clouds',
      humidity: 49,
      iconID: 904,
      temperatureMax: 29,
      temperatureMin: 20.2,
      windSpeed: 3.16
    }
    const renderResponse = renderer
      .create(<WeatherCard weather={mockValues} />)
      .toJSON()
    expect(renderResponse).toMatchSnapshot()
  })
})
