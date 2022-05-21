import React from 'react';

import StyledWrapper from './StyledWrapper';

interface IProps {
    user: any
}

const Home: React.FC<IProps> = ({ user }) => {
    return(
        <StyledWrapper>
            <p>W zakładce <span>Transakcje</span> możesz tworzyć nowe transakcje, przeglądać je, edytować, przypinać notatki, zmieniać status oraz archiwizować.</p>
            <p><span>Notatki</span> służą do przeglądania wszystkich notatek, edytowania istniejących, usuwania lub tworzenia nowej notatki, która nie jest powiązywana z żadną istniejącą transakcją.</p>
            <p>W <span>Informacjach</span> możesz sprawdzić ile transakcji posiadasz na swoim koncie oraz ile z nich jest już zarchiwizowanych!</p>
        </StyledWrapper>
    );
};

export default Home;