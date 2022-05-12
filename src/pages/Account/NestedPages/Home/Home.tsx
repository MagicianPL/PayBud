import React from 'react';
import { BsInfoCircle } from 'react-icons/bs';

import StyledWrapper from './StyledWrapper';
import Input from '../../../../components/Input/Input';
import StyledButton from '../../../../components/StyledButton/StyledButton';
import Modal from '../../../../components/Modal/Modal';

const Home = () => {
    return(
        <StyledWrapper>
            <h1>Ważne</h1>
            <p className="info">
                <BsInfoCircle />
                Nie masz jeszcze powiązanego konta bankowego - zrób to aby móc generować Paylinki oraz otrzymywać zapłatę!
            </p>
            <form>
                <Input id="accountNumber" label="Wpisz poprawny numer swojego konta bankowego" type="number" />
                <div className="terms">
                    <input type="checkbox" id="terms" />
                    <label htmlFor='terms'>Ze względów bezpieczeństwa Twój numer konta bankowego zostanie zaszyfrowany i będzie przetwarzany tylko po stronie serwera. Zaznaczając to pole akceptujesz powyższe warunki.</label>
                </div>
                <StyledButton>Powiąż</StyledButton>
            </form>
            <Modal />
        </StyledWrapper>
    );
};

export default Home;