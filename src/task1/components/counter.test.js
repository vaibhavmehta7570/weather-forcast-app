import React from 'react'
import Adapter from 'enzyme-adapter-react-16'
import { configure, shallow } from 'enzyme'
import Counter from './counter'
import renderer from 'react-test-renderer'
configure({ adapter: new Adapter() })

describe('Test counter.jsx', () => {
  const wrapperApp = shallow(<Counter />)

  test('render correctly Counter component', () => {
    const appRenderResponse = renderer.create(<Counter />).toJSON()
    expect(appRenderResponse).toMatchSnapshot()
  })

  test('simulates onIncrement updation', () => {
    const value = wrapperApp.find('.counter-value').text()
    expect(value).toBe('0')
    const incrementbutton = wrapperApp.find('.btn-green')
    incrementbutton.simulate('click')
    const updatedValue = wrapperApp.find('.counter-value').text()
    expect(updatedValue).toBe('1')
  })

  test('simulates onReset updation', () => {
    const value = wrapperApp.find('.counter-value').text()
    expect(value).toBe('1')
    const resetButton = wrapperApp.find('.btn-orange')
    resetButton.simulate('click')
    const updatedValue = wrapperApp.find('.counter-value').text()
    expect(updatedValue).toBe('0')
  })

  test('simulates onDecrement updation', () => {
    const value = wrapperApp.find('.counter-value').text()
    expect(value).toBe('0')
    const decrementButton = wrapperApp.find('.btn-red')
    decrementButton.simulate('click')
    const updatedValue = wrapperApp.find('.counter-value').text()
    expect(updatedValue).toBe('-1')
  })
})
