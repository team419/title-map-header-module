import React from 'react';
import { shallow, mount, render } from 'enzyme';

import TitleLeft from '../client/src/components/titleLeft';

describe('Title Left Component', () => {
  test('renders correctly', () => {
    const busObj = {
      name: 'Wings Inc',
      totalReviews: 22,
      businessTypeOne: 'Wings',
      businessTypeTwo: 'Fries',
    };
    const wrapper = shallow(<TitleLeft business={busObj} />);

    expect(wrapper).toMatchSnapshot();
  });
});
