import styled from 'styled-components';

const StyledWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: ${({theme}) => theme.colors.secondary};
    position: relative;

    &::after {
        content: "";
        position: absolute;
        width: 100%;
        height: 2px;
        background: ${({theme}) => theme.colors.primary};
        left: 0;
        bottom: 30px;
    }

    label, input {
            font-size: 22px;
            margin-bottom: 10px;
        };

    input {
        margin-bottom: 30px;
        padding: 5px 8px;
        border: none;

        &:focus {
            outline: none;
        }
    }

    @keyframes pulse {
        0% {
            opacity: 1;
        }

        50% {
            opacity: 0;
        }

        100% {
            opacity: 1;
        }
    }
`;

export default StyledWrapper;