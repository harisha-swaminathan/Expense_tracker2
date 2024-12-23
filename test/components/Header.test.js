import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import Header from '../../src/components/Header';

test('component is rendered as expected', () =>{
    const { asFragment } = render(<BrowserRouter> <Header /> </BrowserRouter>);
    expect(asFragment()).toMatchSnapshot();
});