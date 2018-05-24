import React from 'react'
import Enzyme, { shallow, mount, render } from 'enzyme'
import Message from '../Message'

describe('<Message />', () => {
  test('renders a single <p> tag', () => {
    const wrapper = shallow(<Message />);
    expect(wrapper.find('p')).toHaveLength(1);
  });
})
