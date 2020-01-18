import React from 'react';

import { shallow } from 'enzyme';
import TodoFooter from '../TodoFooter';

function setup() {
  const props = {
    switchList: jest.fn(),
  };
  const wrapper = shallow(<TodoFooter {...props} />);
  return { wrapper, props };
}

describe('test TodoFooter Component', () => {
  it('check div exist', () => {
    const { wrapper } = setup();
    const div = wrapper.find('div');
    expect(div.exists()).toBe(true);
    expect(div.length).toBe(1);
  });

  it('check count button exist and check count', () => {
    const { wrapper } = setup();
    const button = wrapper.find('button');
    expect(button.exists()).toBe(true);
    expect(button.length).toBe(3);
  });

  it('check text of button', () => {
    const { wrapper } = setup();
    const button = wrapper.find('button');
    expect(button.length).toBe(3);
    expect(button.at(0).text()).toEqual('All Todos');
    expect(button.at(1).text()).toEqual('Pending Todos');
    expect(button.at(2).text()).toEqual('Completed Todos');
  });

  it('check click event working', () => {
    const { wrapper, props } = setup();
    const button = wrapper.find('button');
    expect(button.length).toBe(3);
    button.at(0).simulate('click');
    button.at(1).simulate('click');
    button.at(2).simulate('click');
    expect(props.switchList.mock.calls.length).toBe(3);
  });
});
