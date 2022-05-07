import React from 'react';

import Test from '../../components/Test';
import StyledViewWrapper from '../../components/StyledViewWrapper/StyledViewWrapper';
import StyledWrapper from './StyledWrapper';
import Logo from '../../components/Logo/Logo';

const Homepage = () => {
    return(
        <StyledViewWrapper>
        <StyledWrapper>
            <Test />
            <div className="flex">
                <div>
                    <p>Zarządzaj płatnościami.<br />
                        Zarządzaj zamówieniami.<br />
                        Prosto i szybko w jednym miejscu.
                    </p>
                    <p className="info">Paylink to Twój osobisty system zarządzania.<br />
                        Wygeneruj link do płatności, dodawaj notatki, otrzymywaj powiadomienia SMS.</p>
                </div>
                <Logo />
            </div>
        </StyledWrapper>
        </StyledViewWrapper>
    );
};

export default Homepage;