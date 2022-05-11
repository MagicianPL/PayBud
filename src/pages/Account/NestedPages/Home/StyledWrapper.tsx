import styled from 'styled-components';

const StyledWrapper = styled.div`
    h1 {
        text-align: left;
        color: red;
        font-size: 20px;
        margin-bottom: 30px;
    }

    .info {
        display: flex;
        gap: 10px;
        align-items: center;
        color: ${({theme}) => theme.colors.primary};
        font-size: 24px;
        text-align: left;
        margin-bottom: 40px;

        svg {
            font-size: 55px;
        }

        @media (max-width: 650px) {
            flex-direction: column;
            font-size: 18px;

            svg {
                font-size: 20px;
            }
        }
    }

    form {
        width: 100%;
        max-width: 510px;
        margin: 0 auto;

        & > div:nth-child(2) {
            margin-bottom: 28px;
        }

        input {
            width: 100%;
        }
    }

    label {
        @media (max-width: 420px) {
            font-size: 18px;
        }
    }

    .terms {
        display: flex;
        gap: 10px;
        cursor: pointer;

        input {
            width: 20px;
            height: 20px;
            accent-color: ${({theme}) => theme.colors.secondary};
            position: relative;
            top: 4px;
            cursor: pointer;
        }

        label {
            text-align: left;
            flex: 1;
            cursor: pointer;
        }
    }
`;

export default StyledWrapper;