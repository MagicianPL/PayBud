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
    position: relative;

    @media (max-width: 1024px) {
        grid-template-columns: 1fr;
    }
}

.notesGrid > svg {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
}

    .error {
        color: red;
    }
`;

export default StyledNotesOfTransaction;