import styled from "styled-components";

const StyledWrapper = styled.div`
    width: 100%;
    max-width: 250px;
    height: 250px;
    max-height: 250px;
    border: 2px solid ${({theme}) => theme.colors.secondary};
`;

export default StyledWrapper;