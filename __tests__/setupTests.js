import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import $ from 'jquery';

import App from '../client/src/components/app';
import TitleRight from '../client/src/components/titleRight';

configure({ adapter: new Adapter() });

describe('ensure testing config', () => {
  test('jest config', () => {
    const message = 'test run';
    expect(message).toEqual('test run');
  });
});

describe('App Component', () => {
  test('Should render App without throwing an error', () => {
    const wrapper = shallow(<App />, { disableLifecycleMethods: true });
    expect(wrapper).toHaveLength(1);
  });
});

describe('Title Right Component', () => {
  test('Should render Title Right without throwing an error', () => {
    const wrapper = shallow(<TitleRight />);
    console.log(wrapper);
    expect(wrapper).toHaveLength(1);
  });
});

// expect.addSnapshotSerializer(createSerializer({ mode: 'deep' }));
