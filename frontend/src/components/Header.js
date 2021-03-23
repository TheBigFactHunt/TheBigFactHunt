import React from 'react';
import Progress from './Progress';

const Header = () => (
    <div>
        <h1>Register now for access to our Quiz!</h1>
        <a id="loginButton" href="/login">Login Here</a>
        <Progress />
    </div>
);

export default Header;