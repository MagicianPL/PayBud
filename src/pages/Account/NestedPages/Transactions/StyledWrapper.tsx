import styled from 'styled-components';

const StyledWrapper = styled.div`
    button {
        display: block;
        margin: 0 auto;
        position: relative;
        bottom: 25px;
        font-size: 18px;
    }

    .toggling {
        border: none;
        background: transparent;
        color: ${({theme}) => theme.colors.secondary};
        font-size: 20px;
        cursor: pointer;
        bottom: 5px;
        margin-bottom: 20px;
    }

    .transactionsGrid {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: auto;
        gap: 12px;
        width: 100%;
        max-width: 900px;
        margin: 0 auto;

        @media (max-width: 800px) {
            grid-template-columns: 1fr;
        }

        @media (min-width: 801px) and (max-width: 880px) {
            grid-template-columns: 1fr 1fr;
        }
    }

    svg {
        margin: 0 auto;
    }
`;

export default StyledWrapper;