import React from 'react';

import StyledWrapper from './StyledWrapper';

const InfoStep = () => {
    return(
        <StyledWrapper>
            <div className="flex">
            <div>
                <p>Wpisujesz wszystkie dane oraz kwotę, prosto i szybko generujesz link do płatności, który przesyłasz klientowi.</p>
                <p> Po opłaceniu dostajesz powiadomienie sms, a pieniądze trafiają na Twoje konto!</p>
                <p>Przyjemnie, łatwo i intuicyjnie!</p>
            </div>
            <div></div>
            </div>

            <div className="flex">
            <div>
                <p>Paylink to także Twój osobisty Asystent Płatności!</p>
                <p>Każdy wygenerowany link, to osobna transakcja, do której możesz przypiąć notatki oraz nimi zarządzać.</p>
                <p>Twoja sprzedaż w jednym miejscu - Z Paylink to proste!</p>
            </div>
            <div></div>
            </div>
        </StyledWrapper>
    );
};

export default InfoStep;