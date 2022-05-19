import React, { useContext } from 'react';
import { NavLink, Routes, Route } from 'react-router-dom';


import StyledViewWrapper from '../../components/StyledViewWrapper/StyledViewWrapper';
import StyledWrapper from './StyledWrapper';
import StyledLogin from './StyledLogin';
import Home from './NestedPages/Home/Home';
import Transactions from './NestedPages/Transactions/Transactions';
import AddTransaction from './NestedPages/Transactions/AddTransaction';
import Notes from './NestedPages/Notes/Notes';
import AddNote from './NestedPages/Notes/AddNote';
import NotesOfTransaction from './NestedPages/Notes/NotesOfTransaction';
import Settings from './NestedPages/Settings/Settings';
import Paylink from './NestedPages/Paylink/Paylink';
import UserContext from '../../context/UserContext';

const Account = () => {
    const [user] = useContext(UserContext);

    return(
        <StyledViewWrapper>
            <StyledWrapper>
            <div className="flex">
                <nav>
                    <StyledLogin>{user?.login}</StyledLogin>
                    <ul>
                        <li><NavLink className={({isActive}) => isActive ? 'isActive' : undefined} to="/account/transactions">Transakcje</NavLink></li>
                        <li><NavLink className={({isActive}) => isActive ? 'isActive' : undefined} to="/account/notes">Notatki</NavLink></li>
                        <li><NavLink className={({isActive}) => isActive ? 'isActive' : undefined} to="/account/settings">Ustawienia</NavLink></li>
                        <li><NavLink className={({isActive}) => isActive ? 'isActive' : undefined} to="/account/paylink">Generuj link</NavLink></li>
                    </ul>
                </nav>
                <div>
                    <Routes>
                        <Route path="/" element={<Home user={user} />} />
                        <Route path="/transactions" element={<Transactions />} />
                        <Route path="/transactions/add-transaction" element={<AddTransaction />} />
                        <Route path="/notes" element={<Notes />} />
                        <Route path="/notes/add-note" element={<AddNote />} />
                        <Route path="/notes/oftransaction/:transactionId" element={<NotesOfTransaction />} />
                        <Route path="/settings" element={<Settings />} />
                        <Route path="/paylink" element={<Paylink />} />
                    </Routes>
                </div>
            </div>
            </StyledWrapper>
        </StyledViewWrapper>
    );
};

export default Account;