import styled from 'styled-components';

const StyledWrapper = styled.div`

p {
    text-align: left;
    margin-bottom: 20px;
    font-size: 22px;
    color: ${({theme}) => theme.colors.primary};
}

    .flex {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;

        div:nth-child(odd) {
            position: relative;
            bottom: 35px;
        }
    
        div:nth-child(even) {
            border: 3px solid purple;
            width: 100%;
            max-width: 550px;
            height: 300px;
            margin-left: 30px;
            margin-bottom: 45px;
        }
    }

    .flex:nth-of-type(2) {
        margin-bottom: 55px;
    }

    svg {
        font-size: 35px;
    }

    .footer {
        text-align: center;
        margin-bottom: 30px;
    }

    .footer:nth-child(even) {
        margin-bottom: 50px;
    }
`;

export default StyledWrapper;