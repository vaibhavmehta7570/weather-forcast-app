import React from 'react'
import Adapter from 'enzyme-adapter-react-16'
import { configure, shallow } from 'enzyme'
import renderer from 'react-test-renderer'
import SearchBar from './SearchBar'
configure({ adapter: new Adapter() })

describe('Should test SearchBar.jsx', () => {
  test('should render correctly Searchbar component', () => {
    const rendererResponse = renderer.create(<SearchBar />)
    expect(rendererResponse).toMatchSnapshot()
  })

  test('should submit form correctly', () => {
    const fakeEvent = {
      preventDefault: () => 'preventDefault called',
      stopPropagation: () => 'stopPropagation called'
    }
    const mockOnSubmit = jest.fn(() => 'hello')
    const SearchBarWrapper = shallow(<SearchBar onSubmit={mockOnSubmit} />)
    const submitForm = SearchBarWrapper.find('.searchbar')
    expect(submitForm.length).toBe(1)
    submitForm.simulate('submit', fakeEvent)
  })
})
