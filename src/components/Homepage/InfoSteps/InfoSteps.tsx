import React from 'react';
import { GiReceiveMoney } from 'react-icons/gi';
import { FaUserTie } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';

import StyledWrapper from './StyledWrapper';
import StyledButton from '../../StyledButton/StyledButton';
import transactionThumbnail from '../../../assets/transactionThumbnail.png';
import noteThumbnail from '../../../assets/noteThumbnail.png';

const InfoSteps = () => {
    const { ref: firstRef, inView: inViewFirst } = useInView({
        triggerOnce: true
    });

      const { ref: secondRef, inView: inViewSecond } = useInView({
        triggerOnce: true
    });

    return(
        <StyledWrapper>
            <div className="flex">
            <div>
                <GiReceiveMoney />
                <p>Tworząc nową transakcję wpisujesz jej tytuł, opcjonalnie kwotę oraz status.</p>
                <p>W każdej chwili możesz przeglądać wszystkie swoje transakcje oraz je edytować lub zarchiwizować!</p>
                <p>Przyjemnie, łatwo i intuicyjnie!</p>
            </div>
            <div>
                <img src={transactionThumbnail} alt="Transaction Thumbnail" />
            </div>
            </div>

            <div className="flex">
            <div>
                <FaUserTie />
                <p>PayBud to także Twój osobisty Asystent Płatności!</p>
                <p>Do każdej wygenerowanej transakcji możesz przypinać notatki oraz nimi zarządzać wedle swoich potrzeb.</p>
                <p>Twoja sprzedaż w jednym miejscu - Z PayBud to proste!</p>
            </div>
            <div>
                <img src={noteThumbnail} alt="Note Thumbnail" />
            </div>
            </div>
            <p className={`footer ${inViewFirst && "visible"}`} ref={firstRef}>Chcesz tworzyć notatki nie generując transakcji? Żaden problem!</p>
            <p className={`footer second ${inViewSecond && "visible"}`} ref={secondRef}>W PayBud to Ty masz pełną kontrolę - możesz używać konta wyłącznie do samych notatek!</p>
            <StyledButton><Link to="/signup">Zakładam konto</Link></StyledButton>
        </StyledWrapper>
    );
};

export default InfoSteps;