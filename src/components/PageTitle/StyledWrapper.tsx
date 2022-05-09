import styled from 'styled-components';

const StyledWrapper = styled.div`

    width: max-content;
    max-height: max-content;
    margin: 0 auto 40px auto;
    border: 2px solid ${({theme}) => theme.colors.secondary};
    position: relative;

    &::before {
        content: "";
        position: absolute;
        width: 93%;
        height: 83%;
        background: white;
        top: 18px;
        left: -2px;
    }

    &::after {
        content: "";
        position: absolute;
        width: 93%;
        height: 83%;
        background: white;
        bottom: 18px;
        right: -2px;
    }

h1 {
    color: ${({theme}) => theme.colors.primary};
    margin: 0 auto 0 auto;
    padding: 25px 40px;
    width: max-content;
    position: relative;
    z-index: 2;
}
`;

export default StyledWrapper;