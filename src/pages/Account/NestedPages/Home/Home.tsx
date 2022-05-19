import React from 'react';

import StyledWrapper from './StyledWrapper';

interface IProps {
    user: any
}

const Home: React.FC<IProps> = ({ user }) => {
    return(
        <StyledWrapper>
            <h1>HOME</h1>
        </StyledWrapper>
    );
};

export default Home;