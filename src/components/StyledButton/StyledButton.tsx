import styled from "styled-components";

const StyledButton = styled.button`
    background: ${({theme}) => theme.colors.primary};
    color: white;
    font-weight: bold;
    cursor: pointer;
    border: none;
    border-radius: 18px;
    padding: 6px 16px;
    font-size: 28px;
    transition: all 0.4s;

    &:hover {
        background: ${({theme}) => theme.colors.secondary};
    }
`;

export default StyledButton;