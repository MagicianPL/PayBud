import styled from 'styled-components';

const StyledWrapper = styled.div`
    .flex {
        display: flex;
        min-height: 900px;

        nav {
            padding: 0 15px;
            border-right: 2px solid rgba(48, 48, 50, 0.1);
        }

        div {
            padding: 12px 15px;
            flex: 1;
        }
    }
`;

export default StyledWrapper;