import React from 'react';

import StyledWrapper from './StyledWrapper';
import LogoImage from '../../assets/logo.png';

const Logo = () => {
    return(
        <StyledWrapper>
            <img src={LogoImage} alt="Paylink Logo" />
        </StyledWrapper>
    );
};

export default Logo;