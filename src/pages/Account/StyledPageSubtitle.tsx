import styled from 'styled-components';

import StyledLogin from './StyledLogin';

const StyledPageSubtitle = styled(StyledLogin)`
    margin: 0 auto 30px auto;
    font-size: 45px;
    font-weight: bold;
    bottom: 43px;

    &::after {
        height: 22px;
    }

    @media (max-width: 550px) {
        font-size: 30px;
    }
`;

export default StyledPageSubtitle;