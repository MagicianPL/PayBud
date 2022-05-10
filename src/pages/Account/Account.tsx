import React from 'react';
import { NavLink, Routes, Route } from 'react-router-dom';


import StyledViewWrapper from '../../components/StyledViewWrapper/StyledViewWrapper';
import StyledWrapper from './StyledWrapper';
import StyledLogin from './StyledLogin';
import Transactions from './NestedPages/Transactions/Transactions';
import Notes from './NestedPages/Notes/Notes';
import Settings from './NestedPages/Settings/Settings';
import Paylink from './NestedPages/Paylink/Paylink';

const Account = () => {
    return(
        <StyledViewWrapper>
            <StyledWrapper>
            <div className="flex">
                <nav>
                    <StyledLogin>MagicianPL</StyledLogin>
                    <ul>
                        <li><NavLink className={({isActive}) => isActive ? 'isActive' : undefined} to="/account/transactions">Transakcje</NavLink></li>
                        <li><NavLink className={({isActive}) => isActive ? 'isActive' : undefined} to="/account/notes">Notatki</NavLink></li>
                        <li><NavLink className={({isActive}) => isActive ? 'isActive' : undefined} to="/account/settings">Ustawienia</NavLink></li>
                        <li><NavLink className={({isActive}) => isActive ? 'isActive' : undefined} to="/account/paylink">Generuj link</NavLink></li>
                    </ul>
                </nav>
                <div>
                    <Routes>
                        <Route path="/transactions" element={<Transactions />} />
                        <Route path="/notes" element={<Notes />} />
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