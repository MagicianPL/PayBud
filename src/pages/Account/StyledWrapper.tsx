import styled from 'styled-components';

const StyledWrapper = styled.div`
    .flex {
        display: flex;
        min-height: 900px;

        nav {
            padding: 0 15px;
            border-right: 2px solid rgba(48, 48, 50, 0.1);
            color: ${({theme}) => theme.colors.secondary};

            @media (max-width: 550px) {
                padding: 0 5px;
            }

            ul {
                width: 100%;
            }

            li {
                font-size: 22px;
                margin-bottom: 12px;
                cursor: pointer;
                width: 100%;
                transition: color 0.3s;

                &:hover {
                    color: ${({theme}) => theme.colors.primary};
                }

                @media (max-width: 550px) {
                    font-size: 14px;
                }
            }

            li:last-child {
                margin-top: 35px;
            }

            a {
                width: 100%;
                display: block;
                border: 3px solid transparent;
                transition: all 0.2s;
            }

            .isActive {
                border-left: 3px solid ${({theme}) => theme.colors.primary};
            }
        }

        & > div {
            padding: 12px 15px;
            flex: 1;
        }
    }
`;

export default StyledWrapper;