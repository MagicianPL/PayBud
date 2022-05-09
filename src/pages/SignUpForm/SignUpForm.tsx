import React from 'react';

import StyledViewWrapper from '../../components/StyledViewWrapper/StyledViewWrapper';
import StyledWrapper from './StyledWrapper';
import PageTitle from '../../components/PageTitle/PageTitle';
import Input from '../../components/Input/Input';

const SignUpForm = () => {
    return(
        <StyledViewWrapper>
            <StyledWrapper>
                <PageTitle title="Załóż konto" />
                <form>
                    <Input id="login" label="Twój login" pulsate />
                    <Input id="email" label="Adres e-mail" pulsate />
                    <Input id="password" label="Hasło" pulsate />
                    <Input id="repeatedPassword" label="Powtórz hasło" pulsate />
                </form>
            </StyledWrapper>
        </StyledViewWrapper>
    );
};

export default SignUpForm;