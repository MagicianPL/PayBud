import styled from "styled-components";

const StyledWrapper = styled.div`
    width: 100%;
    min-height: 50px;
    position: relative;
    margin-bottom: 50px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 8px;
    color: ${({theme}) => theme.colors.primary};

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

    .logo {
        height: 40px;
    }

    ul {
        display: flex;
        gap: 30px;
    }

    li, p {
        cursor: pointer;
        transition: color 0.3s;

        &:hover {
            color: ${({theme}) => theme.colors.secondary};
        }
    }

`;

export default StyledWrapper;