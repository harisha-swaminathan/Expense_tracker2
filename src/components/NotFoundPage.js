import {Link } from 'react-router-dom';

import React from 'react';

const NotFoundPage = () => {
    return (
        <div>
            404! Page not found. <Link to="/"> Go home!</Link>
        </div>
    )
};

export default NotFoundPage;