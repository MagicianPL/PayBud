import React from 'react';

import StyledViewWrapper from '../../components/StyledViewWrapper/StyledViewWrapper';
import Test from '../../components/Test';
import About from '../../components/Homepage/About/About';
import InfoSteps from '../../components/Homepage/InfoSteps/InfoSteps';

const Homepage = () => {
    return(
        <StyledViewWrapper>
            <Test />
            <About />
            <InfoSteps />
        </StyledViewWrapper>
    );
};

export default Homepage;