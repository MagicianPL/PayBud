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
    //checkbox
    const [acceptedTerms, setAcceptedTerms] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setBankAccount(e.target.value);
    };

    const handleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAcceptedTerms(e.target.checked);
    };

    return(
        <StyledWrapper>
            { !user?.bankAccount ?
                <>
                    <h1>Ważne</h1>
            <p className="info">
                <BsInfoCircle />
                Nie masz jeszcze powiązanego konta bankowego - zrób to aby móc generować Paylinki oraz otrzymywać zapłatę!
            </p>
            <form onSubmit={(e) => updateBankAccount(e, bankAccount, acceptedTerms)}>
                <Input id="accountNumber" label="Wpisz poprawny numer swojego konta bankowego" type="number" value={bankAccount} onChange={handleInputChange} />
                <div className="terms">
                    <input type="checkbox" id="terms" onChange={handleCheckbox} />
                    <label htmlFor='terms'>Ze względów bezpieczeństwa Twój numer konta bankowego zostanie zaszyfrowany i będzie przetwarzany tylko po stronie serwera. Zaznaczając to pole akceptujesz powyższe warunki.</label>
                </div>
                <StyledButton>Powiąż</StyledButton>
            </form>
            { showModal && <Modal modalMessage={modalMessage} modalError={modalError} onClick={onModalClick} /> }
                </>
                :
                <p>Numer konta wpisany</p>
        }
        </StyledWrapper>
    );
};

export default Home;