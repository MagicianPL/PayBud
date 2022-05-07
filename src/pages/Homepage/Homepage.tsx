import React from 'react';

import StyledViewWrapper from '../../components/StyledViewWrapper/StyledViewWrapper';
import Test from '../../components/Test';
import About from '../../components/Homepage/About/About';

const Homepage = () => {
    return(
        <StyledViewWrapper>
            <Test />
            <About />
        </StyledViewWrapper>
    );
};

export default Homepage;