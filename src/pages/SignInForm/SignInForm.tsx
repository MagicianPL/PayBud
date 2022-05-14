import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import StyledViewWrapper from '../../components/StyledViewWrapper/StyledViewWrapper';
import StyledSignInWrapper from './StyledSignInWrapper';
import PageTitle from '../../components/PageTitle/PageTitle';
import Input from '../../components/Input/Input';
import StyledButton from '../../components/StyledButton/StyledButton';
import Modal from '../../components/Modal/Modal';
import useSigningIn from '../../hooks/useSigningIn';

const SignInForm = () => {
    const { signingIn, showModal, modalError, onModalClick } = useSigningIn();

    const initialFormValues = {
        email: "",
        password: ""
    };

    const [formValues, setFormValues] = useState(initialFormValues);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value
        });
    };

    return(
        <StyledViewWrapper>
            <StyledSignInWrapper>
                <PageTitle title="Zaloguj" />
                <form onSubmit={e => signingIn(e, formValues)}>
                    <Input id="email" name="email" label="Adres e-mail" type="email" pulsate value={formValues.email} onChange={handleInputChange} />
                    <Input id="password" name="password" label="Hasło" type="password" pulsate value={formValues.password} onChange={handleInputChange} />
                    <Link to="/signup">Nie masz jeszcze konta? Zarejestruj się</Link>
                    <StyledButton>Akceptuj</StyledButton>
                </form>
            </StyledSignInWrapper>
            { showModal && <Modal modalError={modalError} onClick={onModalClick} /> }
        </StyledViewWrapper>
    );
};

export default SignInForm;