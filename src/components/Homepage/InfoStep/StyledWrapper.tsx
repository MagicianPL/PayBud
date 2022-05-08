import styled from 'styled-components';

const StyledWrapper = styled.div`

    .flex {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;

        p {
            text-align: left;
            margin-bottom: 20px;
            font-size: 22px;
            color: ${({theme}) => theme.colors.primary};
        }
    
        div:nth-child(even) {
            border: 3px solid purple;
            width: 100%;
            max-width: 600px;
            height: 300px;
            margin-left: 30px;
            margin-bottom: 45px;
        }
    }
`;

export default StyledWrapper;