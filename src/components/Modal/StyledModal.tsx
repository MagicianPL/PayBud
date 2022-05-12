import styled from 'styled-components';

const StyledModal = styled.div`
    width: 650px;
    max-width: 90%;
    min-height: 100px;
    background: white;
    border-radius: 6px;
    position: absolute;
    top: -20px;
    left: 50%;
    transform: translateX(-50%);
    border: 1px solid ${({theme}) => theme.colors.primary};
    opacity: 0;
    animation: slideFromTop 1s forwards;

    @keyframes slideFromTop {
        100% {
            top: 40px;
            opacity: 1;
        }
    }
`;

export default StyledModal;