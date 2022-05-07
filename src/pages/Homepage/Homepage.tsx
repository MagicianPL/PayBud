import React from 'react';

import Test from '../../components/Test';
import StyledViewWrapper from '../../components/StyledViewWrapper/StyledViewWrapper';
import Logo from '../../components/Logo/Logo';

const Homepage = () => {
    return(
        <StyledViewWrapper>
            <Test />
            <Logo />
        </StyledViewWrapper>
    );
};

export default Homepage;