import styled from 'styled-components';

const StyledWrapper = styled.div`
    color: ${({theme}) => theme.colors.primary};

    svg {
        color: ${({theme}) => theme.colors.secondary};
        font-size: 45px;
        position: relative;
        bottom: 50px;
    }

    h2, p {
        position: relative;
        bottom: 30px;
    }

    h2 {
        margin-bottom: 20px;

        @media(max-width: 550px) {
            text-align: left;
            font-size: 16px;
        }
    }

    p {
        margin-bottom: 25px;
        font-size: 22px;

        @media(max-width: 550px) {
            font-size: 16px;
            text-align: left;
        }

        span {
            font-weight: bold;
        }
    }

    footer {
        margin-top: 45px;
    }
`;

export default StyledWrapper;