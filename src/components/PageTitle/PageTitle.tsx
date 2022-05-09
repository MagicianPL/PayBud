import React from 'react';

import StyledWrapper from './StyledWrapper';

interface IProps {
    title: string
}

const PageTitle: React.FC<IProps> = ({ title }) => {
    return(
        <StyledWrapper>
            <h1>{title}</h1>
        </StyledWrapper>
    );
};

export default PageTitle;