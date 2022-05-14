import React, { useState } from 'react';
import { BsInfoCircle } from 'react-icons/bs';

import StyledWrapper from './StyledWrapper';
import Input from '../../../../components/Input/Input';
import StyledButton from '../../../../components/StyledButton/StyledButton';
import Modal from '../../../../components/Modal/Modal';
import useUpdateBankAccount from '../../../../hooks/useUpdateBankAccount';

interface IProps {
    user: any
}

const Home: React.FC<IProps> = ({ user }) => {
    const { updateBankAccount, showModal, modalMessage, modalError, onModalClick } = useUpdateBankAccount();
    const [bankAccount, setBankAccount] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    //checkbox
    const [acceptedTerms, setAcceptedTerms] = useState(false);

    const handleBankAccountInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setBankAccount(e.target.value);
    };

    const handlePhoneNumberInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPhoneNumber(e.target.value);
    };

    const handleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAcceptedTerms(e.target.checked);
    };

    return(
        <StyledWrapper>
            { (!user?.bankAccount || !user?.phoneNumber) &&
            <>
            <h1>Ważne</h1>
            <p className="info">
                <BsInfoCircle />
                Nie masz jeszcze powiązanego konta bankowego oraz numeru telefonu - zrób to aby móc generować Paylinki oraz otrzymywać zapłatę.
            </p>
            <form onSubmit={(e) => updateBankAccount(e, bankAccount, acceptedTerms, phoneNumber)}>
                <Input id="accountNumber" label="Wpisz poprawny numer swojego konta bankowego" type="number" value={bankAccount} onChange={handleBankAccountInputChange} />
                <Input id="phoneNumber" label="Wpisz własny numer telefonu komórkowego" type="number" value={phoneNumber} onChange={handlePhoneNumberInputChange} />
                <div className="terms">
                    <input type="checkbox" id="terms" onChange={handleCheckbox} />
                    <label htmlFor='terms'>Ze względów bezpieczeństwa Twój numer konta bankowego oraz numer telefonu zostaną zaszyfrowane i będą przetwarzane tylko po stronie serwera. W każdej chwili jednym kliknięciem możesz permanentnie wyczyścić zaszyfrowane dane. Zaznaczając to pole akceptujesz powyższe warunki.</label>
                </div>
                <StyledButton>Powiąż</StyledButton>
            </form>
            </>
            }
            { showModal && <Modal modalMessage={modalMessage} modalError={modalError} onClick={onModalClick} /> }
        </StyledWrapper>
    );
};

export default Home;