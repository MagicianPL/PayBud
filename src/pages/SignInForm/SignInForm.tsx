import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import StyledViewWrapper from '../../components/StyledViewWrapper/StyledViewWrapper';
import StyledSignInWrapper from './StyledSignInWrapper';
import PageTitle from '../../components/PageTitle/PageTitle';
import Input from '../../components/Input/Input';
import StyledButton from '../../components/StyledButton/StyledButton';
import UserContext from '../../context/UserContext';

const SignInForm = () => {
    const [, setUser] = useContext(UserContext);
    const navigate = useNavigate();

    const signIn = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();

        setUser({
            login: "Magician",
            email: "email@email.com"
        });

        navigate("/account");
    };

    return(
        <StyledViewWrapper>
            <StyledSignInWrapper>
                <PageTitle title="Zaloguj" />
                <form>
                    <Input id="email" label="Adres e-mail" type="email" pulsate />
                    <Input id="password" label="Hasło" type="password" pulsate />
                    <Link to="/signup">Nie masz jeszcze konta? Zarejestruj się</Link>
                    <StyledButton onClick={signIn}>Akceptuj</StyledButton>
                </form>
            </StyledSignInWrapper>
        </StyledViewWrapper>
    );
};

export default SignInForm;