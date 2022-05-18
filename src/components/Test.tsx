import React from 'react';
import styled from 'styled-components';

const StyledH = styled.h1`
    text-align: center;
    color: ${({theme}) => theme.colors.primary};
`;

const Test = () => {
    return(
        <StyledH>PAYBUD</StyledH>
    );
};

export default Test;