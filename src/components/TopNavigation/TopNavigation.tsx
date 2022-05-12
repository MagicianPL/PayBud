import React from 'react';
import { Link } from 'react-router-dom';

import StyledWrapper from './StyledWrapper';
import Logo from '../Logo/Logo';

const TopNavigation = () => {
    return(
        <StyledWrapper>
            <div className="logo">
                <Logo />
            </div>
            <ul>
                <li><Link to="/">HOME</Link></li>
                <li><Link to="/account">KONTO</Link></li>
            </ul>
            <p><Link to="/signin">Zaloguj</Link></p>
        </StyledWrapper>
    );
};

export default TopNavigation;