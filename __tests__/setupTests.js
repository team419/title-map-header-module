import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import css from '../client/dist/styles.css';

import App from '../client/src/components/app';
import TitleRight from '../client/src/components/titleRight';
import TitleLeft from '../client/src/components/titleLeft';
import MapBox from '../client/src/components/mapBox';
import InfoItem from '../client/src/components/infoItem';

const dataMock = require('../__mocks__/dataMock');

configure({ adapter: new Adapter() });

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

xdescribe('Title Left Component', () => {
  const { business } = dataMock;
  const className = css['title-left-entry'];
  console.log(`ClassName hash: ${className}`);

  test('Should render Title Left component without throwing an error', () => {
    const wrapper = shallow(<TitleLeft business={business} />);
    expect(wrapper.exists('#title-left')).toEqual(true);
  });

  test('Should render three parent list entry items', () => {
    const wrapper = shallow(<TitleLeft business={business} />);
    expect(wrapper.find('#title-left').children()).toHaveLength(3);
  });
});

xdescribe('Map Box component', () => {
  const { business } = dataMock;
  const wrapper = shallow(<MapBox business={business} />);

  test('Should render Map Box Component without throwing an error', () => {
    expect(wrapper.exists('#map-box-container')).toEqual(true);
  });

  test('Should render dummy google map image', () => {
    expect(wrapper.exists('#map-box-image')).toEqual(true);
  });

  test('Should render an ordered list with nine elements', () => {
    expect(wrapper.exists('ol')).toEqual(true);
    expect(wrapper.find('ol').children()).toHaveLength(9);
  });
});

describe('Info Item component', () => {
  const { infoItem } = dataMock;

  test('Should render a single div when only passed info', () => {
    const wrapper = shallow(<InfoItem info={infoItem.info} />);
    expect(wrapper.exists('sv')).toEqual(false);
    expect(wrapper.exists('span')).toEqual(false);
    expect(wrapper.exists('a')).toEqual(false);
  });

  test('Should render a string entry with corresponding png icon when passed info and icon props', () => {
    const wrapper = shallow(<InfoItem info={infoItem.info} pngPath={infoItem.png} />);
    expect(wrapper.exists('svg')).toEqual(true);
    expect(wrapper.exists('span')).toEqual(true);
    expect(wrapper.exists('a')).toEqual(false);
  });

  test('Should render a hyperlink text list entry with an accompanying icon when passed the appropriate props', () => {
    const wrapper = shallow(<InfoItem
      info={infoItem.info}
      link={infoItem.link}
      pngPath={infoItem.png}
    />);
    expect(wrapper.exists('svg')).toEqual(true);
    expect(wrapper.exists('span')).toEqual(true);
    expect(wrapper.exists('a')).toEqual(true);
  });
});
