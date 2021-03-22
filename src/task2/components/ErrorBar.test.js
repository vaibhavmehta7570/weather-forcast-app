import React from 'react'
import Adapter from 'enzyme-adapter-react-16'
import { configure, shallow } from 'enzyme'
import ErrorBar from './ErrorBar'
import renderer from 'react-test-renderer'
configure({ adapter: new Adapter() })

describe('Should test WeatherApp.jsx', () => {
  const wrapperErrorBar = shallow(<ErrorBar message={'Mock error message'} />)

  test('should render correctly Counter component', () => {
    const appRenderResponse = renderer.create(<ErrorBar />).toJSON()
    expect(appRenderResponse).toMatchSnapshot()
  })

  test('should simulate errorbar displaying error prop', () => {
    const value = wrapperErrorBar.find('.error__message').text()
    expect(value).toBe('Mock error message')
  })
})
