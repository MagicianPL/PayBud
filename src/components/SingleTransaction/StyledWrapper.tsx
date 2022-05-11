import styled from 'styled-components';

const StyledWrapper = styled.div`
    padding: 10px 15px;
    height: max-content;
    position: relative;

    &::before {
        content: "";
        position: absolute;
        background: white;
        top: 10px;
        left: 0;
        width: 96%;
        height: 100%;
        z-index: -1;
    }

    &::after {
        content: "";
        position: absolute;
        background: white;
        bottom: 10px;
        right: 0;
        width: 96%;
        height: 100%;
        z-index: -1;
    }

    .border {
        content: "";
        position: absolute;
        inset: 0;
        border: 3px solid rgba(48, 48, 50, 0.5);
        z-index: -2;
        opacity: 0;
        transition: opacity 0.5s;
    }

    &:hover > div.border {
        opacity: 1;
    }

    .actions {
        opacity: 0;
        transition: all 0.5s;
    }

    &:hover > div.actions {
        opacity: 1;
    }

    p {
        margin-bottom: 12px;
        font-size: 20px;
    }

    .payed {
        color: green;
    }

    svg {
        color: ${({theme}) => theme.colors.primary};
        font-size: 20px;
        cursor: pointer;
    }
`;

export default StyledWrapper;