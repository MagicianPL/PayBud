import styled from 'styled-components';

const StyledAddNoteWrapper = styled.div`
    .withTransaction, .tip {
        font-size: 18px;
        color: ${({theme}) => theme.colors.secondary};
        margin-bottom: 20px;
    }

    .tip {
        margin-top: 50px;
        font-weight: bold;
        font-size: 20px;
        display: flex;
        align-items: center;
        gap: 10px;

        svg {
            font-size: 28px;
        }
    }
`;

export default StyledAddNoteWrapper;