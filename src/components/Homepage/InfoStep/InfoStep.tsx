import React from 'react';
import { GiReceiveMoney } from 'react-icons/gi';
import { FaUserTie } from 'react-icons/fa';

import StyledWrapper from './StyledWrapper';
import StyledButton from '../../StyledButton/StyledButton';

const InfoStep = () => {
    return(
        <StyledWrapper>
            <div className="flex">
            <div>
                <GiReceiveMoney />
                <p>Wpisujesz wszystkie dane oraz kwotę, prosto i szybko generujesz link do płatności, który przesyłasz klientowi.</p>
                <p> Po opłaceniu dostajesz powiadomienie sms, a pieniądze trafiają na Twoje konto!</p>
                <p>Przyjemnie, łatwo i intuicyjnie!</p>
            </div>
            <div></div>
            </div>

            <div className="flex">
            <div>
                <FaUserTie />
                <p>Paylink to także Twój osobisty Asystent Płatności!</p>
                <p>Każdy wygenerowany link, to osobna transakcja, do której możesz przypiąć notatki oraz nimi zarządzać.</p>
                <p>Twoja sprzedaż w jednym miejscu - Z Paylink to proste!</p>
            </div>
            <div></div>
            </div>
            <p className="footer">Chcesz tworzyć notatki nie generując linków? Żaden problem!</p>
            <p className="footer">W Paylink to Ty masz pełną kontrolę - możesz używać konta wyłącznie jako swój osobisty system zarządzania.</p>
            <StyledButton>Zakładam konto</StyledButton>
        </StyledWrapper>
    );
};

export default InfoStep;