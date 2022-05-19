import styled from 'styled-components';

const StyledNotesOfTransaction = styled.div`

.notesGrid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: auto;
    gap: 12px;
    width: 100%;
    max-width: 900px;
    margin: 0 auto;

    @media (max-width: 1024px) {
        grid-template-columns: 1fr;
    }

    svg {
        margin: 0 auto;
    }
}

    .error {
        color: red;
    }
`;

export default StyledNotesOfTransaction;