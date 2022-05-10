import styled from 'styled-components';

const StyledWrapper = styled.div`
    form {
        width: 100%;
        max-width: 400px;
        margin: 0 auto;

        a {
            color: inherit;
            display: block;
            text-decoration: none;
            text-align: left;
            margin: 0 auto 30px 0;
            width: max-content;
            border-bottom: 1px solid transparent;
            transition: all 0.3s;

            &:hover {
                border-bottom: 1px solid ${({theme}) => theme.colors.secondary};
            }
        }
    }
`;

export default StyledWrapper;