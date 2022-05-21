import React from 'react';

import StyledViewWrapper from '../../components/StyledViewWrapper/StyledViewWrapper';
import StyledTitle from '../../components/Homepage/StyledTitle/StyledTitle';
import About from '../../components/Homepage/About/About';
import InfoSteps from '../../components/Homepage/InfoSteps/InfoSteps';

const Homepage = () => {
    return(
        <StyledViewWrapper>
            <StyledTitle>PAYBUD</StyledTitle>
            <About />
            <InfoSteps />
        </StyledViewWrapper>
    );
};

export default Homepage;