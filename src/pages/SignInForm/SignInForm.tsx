import React from 'react';
import { Link } from 'react-router-dom';

import StyledViewWrapper from '../../components/StyledViewWrapper/StyledViewWrapper';
import StyledSignInWrapper from './StyledSignInWrapper';
import PageTitle from '../../components/PageTitle/PageTitle';
import Input from '../../components/Input/Input';
import StyledButton from '../../components/StyledButton/StyledButton';

const SignInForm = () => {
    return(
        <StyledViewWrapper>
            <StyledSignInWrapper>
                <PageTitle title="Zaloguj" />
                <form>
                    <Input id="email" label="Adres e-mail" type="email" pulsate />
                    <Input id="password" label="Hasło" type="password" pulsate />
                    <Link to="/signup">Nie masz jeszcze konta? Zarejestruj się</Link>
                    <StyledButton>Akceptuj</StyledButton>
                </form>
            </StyledSignInWrapper>
        </StyledViewWrapper>
    );
};

export default SignInForm;