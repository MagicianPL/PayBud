import styled from 'styled-components';

const StyledWrapper = styled.div`
    h2 {
        color: ${({theme}) => theme.colors.secondary};
        position: relative;
        bottom: 50px;
        font-weight: normal;
        font-size: 22px;
    }

    form {
        max-width: 420px;
        margin: 0 auto;

        & > div:nth-child(2) {
            margin-bottom: 28px;
        }
    }
`;

export default StyledWrapper;