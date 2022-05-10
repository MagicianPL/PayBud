import React from 'react';

import StyledViewWrapper from '../../components/StyledViewWrapper/StyledViewWrapper';
import StyledWrapper from './StyledWrapper';
import StyledLogin from './StyledLogin';

const Account = () => {
    return(
        <StyledViewWrapper>
            <StyledWrapper>
            <div className="flex">
                <nav>
                    <StyledLogin>MagicianPL</StyledLogin>
                    <ul>
                        <li>Transakcje</li>
                        <li>Notatki</li>
                        <li>Ustawienia</li>
                    </ul>
                </nav>
                <div></div>
            </div>
            </StyledWrapper>
        </StyledViewWrapper>
    );
};

export default Account;