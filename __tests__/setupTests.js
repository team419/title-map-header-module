import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';

import App from '../client/src/components/app';
import TitleRight from '../client/src/components/titleRight';
import TitleLeft from '../client/src/components/titleLeft';
import MapBox from '../client/src/components/mapBox';

configure({ adapter: new Adapter() });

describe('Test to ensure testing config', () => {
  test('Jest configuration', () => {
    const message = 'test run';
    expect(message).toEqual('test run');
  });
});

describe('App Component with disableLifecycleMethods enabled', () => {
  const wrapper = shallow(<App />, { disableLifecycleMethods: true });
  test('Should render App without throwing an error', () => {
    expect(wrapper).toHaveLength(1);
  });

  test('Should render single \'rendering\' element before componentDidMount is called', () => {
    expect(wrapper.contains(<div>Rendering</div>)).toEqual(true);
  });
});

xdescribe('App Component rendering with lifecycle methods', () => {
  const wrapper = shallow(<App />);
  test.skip('Should break because I haven\'t configured for jQuery support', () => {
    expect(wrapper).toHaveLength(1);
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

describe('Map Box component', () => {
  const wrapper = shallow(<MapBox />);
  test('Should render Map Box Component without throwing an error', () => {
    expect(wrapper.find('#map-box-container')).toHaveLength(1);
  });

  test('Should render dummy google map image', () => {
    expect(wrapper.find('#map-box-image')).toHaveLength(1);
  });
});

// expect.addSnapshotSerializer(createSerializer({ mode: 'deep' }));
