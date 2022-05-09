import styled from "styled-components";

const StyledWrapper = styled.div`
    width: 100%;
    min-height: 50px;
    position: relative;

    &::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 80%;
        height: 1px;
        background: ${({theme}) => theme.colors.secondary};
        opacity: 0.1;
    }

`;

export default StyledWrapper;