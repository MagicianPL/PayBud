import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import StyledViewWrapper from '../../components/StyledViewWrapper/StyledViewWrapper';
import StyledWrapper from './StyledWrapper';
import PageTitle from '../../components/PageTitle/PageTitle';
import Input from '../../components/Input/Input';
import StyledButton from '../../components/StyledButton/StyledButton';
import useUserRegistration from '../../hooks/useUserRegistration';

const SignUpForm = () => {
    const { registerUser } = useUserRegistration();

    const initialFormValues = {
        login: "",
        email: "",
        password: "",
        repeatedPassword: ""
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
            <StyledWrapper>
                <PageTitle title="Załóż konto" />
                <form onSubmit={(e) => registerUser(e, formValues)}>
                    <Input id="login" name="login" label="Twój login" pulsate value={formValues.login} onChange={handleInputChange} />
                    <Input id="email" name="email" label="Adres e-mail" type="email" pulsate value={formValues.email} onChange={handleInputChange} />
                    <Input id="password" name="password" label="Hasło" type="password" pulsate value={formValues.password} onChange={handleInputChange} />
                    <Input id="repeatedPassword" name="repeatedPassword" label="Powtórz hasło" type="password" pulsate value={formValues.repeatedPassword} onChange={handleInputChange} />
                    <Link to="/signin">Posiadasz już konto? Zaloguj się</Link>
                    <StyledButton>Akceptuj</StyledButton>
                </form>
            </StyledWrapper>
        </StyledViewWrapper>
    );
};

export default SignUpForm;