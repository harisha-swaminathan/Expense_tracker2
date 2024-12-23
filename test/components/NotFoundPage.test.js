import React from 'react';
import ReactShallowRenderer from 'react-test-renderer/shallow';

import NotFoundPage from '../../src/components/NotFoundPage';

test('component is rendered as expected', () =>{
    const renderer = new ReactShallowRenderer();

    renderer.render( <NotFoundPage />);
    expect(renderer).toMatchSnapshot();
});