import styled from 'styled-components';

const StyledWrapper = styled.div`
    h2 {
        color: ${({theme}) => theme.colors.secondary};
        position: relative;
        bottom: 50px;
        font-weight: normal;
        font-size: 22px;
    }
`;

export default StyledWrapper;