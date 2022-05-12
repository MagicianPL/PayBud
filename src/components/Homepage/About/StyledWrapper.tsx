import styled from 'styled-components';

const StyledWrapper = styled.div`

.flex {
    display: flex;
    justify-content: center;
    gap: 30px;
    align-items: center;

    @media (max-width: 900px) {
        flex-direction: column-reverse;
        align-items: center;
    }

    p {
        text-align: left;
        color: ${({theme}) => theme.colors.primary};
        font-weight: bold;
        font-size: 42px;
        line-height: 60px;
        margin: 0;

        @media (max-width: 900px) {
            line-height: 45px;
            text-align: center;
            margin-bottom: 25px;
        }

        @media(max-width: 750px) {
            font-size: 29px;
        }

        @media (min-width: 751px) and (max-width: 900px) {
            font-size: 36px;
        }
    }

    .info {
        color: ${({theme}) => theme.colors.secondary};
        font-weight: normal;
        font-size: 22px;
        line-height: initial;
        margin: 18px 0 45px 0;
        line-height: 40px;
    }
}

.logo {
    @media (min-width: 901px) {
        align-self: flex-start;
    }
}

.counter {
    color: ${({theme}) => theme.colors.secondary};
    text-align: left;
    font-size: 28px;
    margin: 100px auto 120px auto;
    width: max-content;
    position: relative;

    @media (max-width: 500px) {
        font-size: 23px;
    }
    @media (max-width: 400px) {
        font-size: 18px;
    }

    &::after {
        content: "";
        position: absolute;
        width: 98%;
        height: 20px;
        background: ${({theme}) => theme.colors.secondary};
        bottom: -9px;
        left: 0;
        opacity: 0.2;
        clip-path: polygon(2% 0, 100% 0, 98% 100%, 0% 100%);
    }
}
`;

export default StyledWrapper;