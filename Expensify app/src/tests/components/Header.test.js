
import { shallow } from 'enzyme';
import React from 'react';
import Header from '../../components/Header';

test('should render Header correctly', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();   
});
// expect(wrapper.find('h1').text()).toBe('Expensify');
// const renderer = new ReactShalllowRenderer();
    // renderer.render(<Header />);

    // expect(renderer.getRenderOutput()).toMatchSnapshot();
