import styled from 'styled-components';

const StyledModal = styled.div`
    width: 90%;
    max-width: 650px;
    min-height: 450px;
    background: white;
    border-radius: 6px;
    position: absolute;
    top: -20px;
    left: 50%;
    transform: translateX(-50%);
    opacity: 0;
    animation: slideFromTop 1s forwards;
    color: ${({theme}) => theme.colors.primary};
    padding: 25px;

    * {
        text-align: center;
    }

    svg {
        font-size: 50px;
    }

    .modalBody {
        margin: 35px 0 50px 0;
        font-size: 18px;

        p {
            line-height: 28px;
        }

        .error {
            color: red;
        }
    }

    .loading {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    @keyframes slideFromTop {
        100% {
            top: 40px;
            opacity: 1;
        }
    }
`;

export default StyledModal;