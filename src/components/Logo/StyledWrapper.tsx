import styled from "styled-components";

const StyledWrapper = styled.div`
    width: 100%;
    max-width: 320px;
    height: 320px;
    max-height: 100%;
    border: 2px solid ${({theme}) => theme.colors.secondary};
`;

export default StyledWrapper;