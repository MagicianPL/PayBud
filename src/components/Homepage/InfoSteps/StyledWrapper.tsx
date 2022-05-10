import styled from 'styled-components';

const StyledWrapper = styled.div`

p {
    text-align: left;
    margin-bottom: 20px;
    font-size: 22px;
    color: ${({theme}) => theme.colors.primary};

    @media (max-width: 500px) {
        text-align: center;
        font-size: 20px;
    }
}

    .flex {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;

        @media (max-width: 900px) {
            flex-direction: column-reverse;
        }

        div:nth-child(odd) {
            position: relative;
            bottom: 35px;
            max-width: 614px;
            margin: 0 auto;
        }
    
        div:nth-child(even) {
            border: 3px solid purple;
            width: 550px;
            max-width: 100%;
            height: 300px;
            margin-left: 30px;
            margin-bottom: 45px;

            @media (max-width: 900px) {
                margin: 0 auto 58px auto;
            }
        }
    }

    .flex:nth-of-type(2) {
        margin-bottom: 55px;

        @media (max-width: 900px) {
            margin-bottom: 18px;
        }
    }

    svg {
        font-size: 35px;

        @media (max-width: 500px) {
            position: relative;
            bottom: 5px;
            font-size: 31px;
        }
    }

    .footer {
        text-align: center;
        margin-bottom: 30px;
        opacity: 0;
        transition: opacity 1s;
    }

    .footer.second {
        margin-bottom: 50px;
        transition-delay: 0.3s;
    }

    .visible {
        opacity: 1;
    }
`;

export default StyledWrapper;