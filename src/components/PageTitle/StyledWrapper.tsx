import styled from 'styled-components';

const StyledWrapper = styled.div`

    width: max-content;
    max-height: max-content;
    margin: 0 auto 40px auto;
    position: relative;

    &::after {
        content: "";
        position: absolute;
        width: 98%;
        height: 26px;
        background: ${({theme}) => theme.colors.secondary};
        bottom: 14px;
        left: 0;
        opacity: 0.2;
        clip-path: polygon(2% 0, 100% 0, 98% 100%, 0% 100%);
    }

h1 {
    font-size: 38px;
    color: ${({theme}) => theme.colors.primary};
    margin: 0 auto 0 auto;
    padding: 25px 40px;
    width: max-content;
    position: relative;
    z-index: 2;
}
`;

export default StyledWrapper;