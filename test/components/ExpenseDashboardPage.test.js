import React from 'react';
import ReactShallowRenderer from 'react-test-renderer/shallow';

import ExpenseDashboardPage from '../../src/components/ExpenseDashboardPage';

test('component is rendered as expected', () =>{
    const renderer = new ReactShallowRenderer();

    renderer.render( <ExpenseDashboardPage />);
    expect(renderer).toMatchSnapshot();
});