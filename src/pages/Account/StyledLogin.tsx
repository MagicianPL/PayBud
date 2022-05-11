import styled from 'styled-components';

const StyledLogin = styled.p`
    width: max-content;
    margin: 0 auto 25px auto;
    position: relative;
    font-size: 26px;
    color: ${({theme}) => theme.colors.primary};
    z-index: 2;

    @media (max-width: 550px) {
        font-size: 15px;
    }

    &::after {
        content: "";
        position: absolute;
        width: 98%;
        height: 16px;
        background: ${({theme}) => theme.colors.secondary};
        bottom: -6px;
        left: 0;
        opacity: 0.2;
        clip-path: polygon(2% 0, 100% 0, 98% 100%, 0% 100%);
    }
`;

export default StyledLogin;