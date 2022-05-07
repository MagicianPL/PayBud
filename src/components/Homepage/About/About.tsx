import React from 'react';

import StyledWrapper from './StyledWrapper';
import Logo from '../../Logo/Logo';
import StyledButton from '../../StyledButton/StyledButton';

const About = () => {
    return(
        <StyledWrapper>
            <div className="flex">
                <div>
                    <p>Zarządzaj płatnościami.<br />
                        Zarządzaj zamówieniami.<br />
                        Prosto i szybko w jednym miejscu.
                    </p>
                    <p className="info">Paylink to Twój osobisty system zarządzania.<br />
                        Wygeneruj link do płatności, dodawaj notatki, otrzymywaj powiadomienia SMS.</p>
                    <StyledButton>Załóż konto</StyledButton>
                </div>
                <Logo />
            </div>
            <p className="counter">Wygenerowaliśmy już <strong>246 paylinków</strong></p>
        </StyledWrapper>
    );
};

export default About;