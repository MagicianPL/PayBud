import React from 'react';
import { BsInfoCircle } from 'react-icons/bs';

import StyledWrapper from './StyledWrapper';
import Input from '../../../../components/Input/Input';
import StyledButton from '../../../../components/StyledButton/StyledButton';

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
                <StyledButton>Powiąż</StyledButton>
            </form>
        </StyledWrapper>
    );
};

export default Home;