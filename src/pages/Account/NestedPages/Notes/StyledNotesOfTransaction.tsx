import styled from 'styled-components';

const StyledNotesOfTransaction = styled.div`

button {
    position: relative;
    bottom: 25px;
    font-size: 18px;
}

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
}
`;

export default StyledNotesOfTransaction;