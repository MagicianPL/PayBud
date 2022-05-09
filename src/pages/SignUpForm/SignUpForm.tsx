import React from 'react';

import StyledViewWrapper from '../../components/StyledViewWrapper/StyledViewWrapper';
import StyledWrapper from './StyledWrapper';
import PageTitle from '../../components/PageTitle/PageTitle';
import Input from '../../components/Input/Input';
import StyledButton from '../../components/StyledButton/StyledButton';

const SignUpForm = () => {
    return(
        <StyledViewWrapper>
            <StyledWrapper>
                <PageTitle title="Załóż konto" />
                <form>
                    <Input id="login" label="Twój login" pulsate />
                    <Input id="email" label="Adres e-mail" type="email" pulsate />
                    <Input id="password" label="Hasło" type="password" pulsate />
                    <Input id="repeatedPassword" label="Powtórz hasło" type="password" pulsate />
                    <StyledButton>Akceptuj</StyledButton>
                </form>
            </StyledWrapper>
        </StyledViewWrapper>
    );
};

export default SignUpForm;