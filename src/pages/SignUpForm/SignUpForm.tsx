import React from 'react';

import StyledViewWrapper from '../../components/StyledViewWrapper/StyledViewWrapper';
import StyledWrapper from './StyledWrapper';
import Input from '../../components/Input/Input';

const SignUpForm = () => {
    return(
        <StyledViewWrapper>
            <StyledWrapper>
                <h1>Załóż konto</h1>
                <form>
                    <Input id="login" label="Twój login" />
                    <Input id="email" label="Adres e-mail" />
                    <Input id="password" label="Hasło" />
                    <Input id="repeatedPassword" label="Powtórz hasło" />
                </form>
            </StyledWrapper>
        </StyledViewWrapper>
    );
};

export default SignUpForm;