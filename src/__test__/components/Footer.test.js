import React from 'react';
import { mount } from 'enzyme';
import Footer from '../../components/Footer';

describe('Footer', () => {
  const footer = mount(<Footer />);

  test('Footer Render Component', () => {
    expect(footer.length).toEqual(1);
  });

  test('Footer title ok', () => {
    expect(footer.find('.Footer-title').text()).toEqual('Platzi Store');
  });
});
