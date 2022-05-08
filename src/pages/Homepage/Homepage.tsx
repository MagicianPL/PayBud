import React from 'react';

import StyledViewWrapper from '../../components/StyledViewWrapper/StyledViewWrapper';
import Test from '../../components/Test';
import About from '../../components/Homepage/About/About';
import InfoStep from '../../components/Homepage/InfoStep/InfoStep';

const Homepage = () => {
    return(
        <StyledViewWrapper>
            <Test />
            <About />
            <InfoStep />
        </StyledViewWrapper>
    );
};

export default Homepage;