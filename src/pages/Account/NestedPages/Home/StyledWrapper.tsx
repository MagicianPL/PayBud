import styled from 'styled-components';

const StyledWrapper = styled.div`
    p {
        margin-bottom: 25px;
        font-size: 22px;
        color: ${({theme}) => theme.colors.primary};

        @media(max-width: 550px) {
            font-size: 16px;
            text-align: left;
        }

        span {
            font-weight: bold;
        }
    }
`;

export default StyledWrapper;