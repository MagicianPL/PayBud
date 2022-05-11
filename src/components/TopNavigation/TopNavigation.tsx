import React from 'react';

import StyledWrapper from './StyledWrapper';
import Logo from '../Logo/Logo';

const TopNavigation = () => {
    return(
        <StyledWrapper>
            <div className="logo">
                <Logo />
            </div>
            <ul>
                <li>HOME</li>
                <li>KONTO</li>
            </ul>
            <p>Wyloguj</p>
        </StyledWrapper>
    );
};

export default TopNavigation;