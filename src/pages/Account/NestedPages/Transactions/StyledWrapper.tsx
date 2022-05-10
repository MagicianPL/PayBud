import styled from 'styled-components';

const StyledWrapper = styled.div`
    .transactionsGrid {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: auto;
        gap: 12px;
        width: 100%;
        max-width: 900px;
        margin: 0 auto;
    }
`;

export default StyledWrapper;