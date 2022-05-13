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

    &.normal::after {
        display: none;
    }

    &.animation::after {
        animation: pulsate 3s infinite;
    }

    label, input, textarea {
            font-size: 18px;
            margin-bottom: 10px;

            @media (min-width: 450px) {
                font-size: 22px;
            }

            @media (max-width: 380px) {
                font-size: 14px;
            }
        };

    input, textarea {
        margin-bottom: 30px;
        padding: 5px 8px;
        border: none;

        &:focus {
            outline: none;
        }
    };

    textarea {
        width: 100%;
        max-width: 800px;
        border: 2px solid ${({theme}) => theme.colors.primary};
        text-align: left;
    }

    @keyframes pulsate {
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