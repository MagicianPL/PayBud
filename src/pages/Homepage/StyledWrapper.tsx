import styled from 'styled-components';

const StyledWrapper = styled.div`
    .flex {
        display: flex;
        border: 1px solid yellow;
        justify-content: center;
        gap: 30px;
        align-items: center;

        p {
            text-align: left;
            color: ${({theme}) => theme.colors.primary};
            font-weight: bold;
            font-size: 42px;
            line-height: 60px;
            margin: 0;
        }

        .info {
            color: ${({theme}) => theme.colors.secondary};
            font-weight: normal;
            font-size: 22px;
            line-height: initial;
            margin-top: 18px;
            line-height: 40px;
        }
    }
`;

export default StyledWrapper;