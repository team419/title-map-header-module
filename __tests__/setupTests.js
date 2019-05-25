import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';

import App from '../client/src/components/app';
import TitleRight from '../client/src/components/titleRight';
import TitleLeft from '../client/src/components/titleLeft';

configure({ adapter: new Adapter() });

describe('ensure testing config', () => {
  test('jest config', () => {
    const message = 'test run';
    expect(message).toEqual('test run');
  });
});

describe('App Component', () => {
  const wrapper = shallow(<App />, { disableLifecycleMethods: true });

  test('Should render App without throwing an error', () => {
    expect(wrapper).toHaveLength(1);
  });

  test('Should render placeholding photo carousel on main page', () => {
    expect(wrapper.find('#insert-photo-component-here')).toHaveLength(1);
  });
});

describe('Title Right Component', () => {
  test('Should render Title Right without throwing an error', () => {
    const wrapper = shallow(<TitleRight />);
    expect(wrapper).toHaveLength(1);
  });

  test('Should render four buttons', () => {
    const wrapper = shallow(<TitleRight />);
    expect(wrapper.find('button').length).toEqual(4);
  });
});

describe('Title Left Component', () => {
  const titleLeftMock = {};
  test('Should render Title Left component without throwing an error', () => {
    const wrapper = shallow(<TitleLeft business={titleLeftMock} />);
    expect(wrapper).toHaveLength(1);
  });

  test('Should render three parent list entry items', () => {
    const wrapper = shallow(<TitleLeft business={titleLeftMock} />);
    expect(wrapper.find('.title-left-entry')).toHaveLength(3);
  });
});

// expect.addSnapshotSerializer(createSerializer({ mode: 'deep' }));
