import styled from 'styled-components';

const StyledTitle = styled.h1`
    text-align: center;
    color: ${({theme}) => theme.colors.primary};
    margin-bottom: 30px;
`;

export default StyledTitle;