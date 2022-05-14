import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import StyledWrapper from './StyledWrapper';
import Logo from '../Logo/Logo';
import UserContext from '../../context/UserContext';
import useSigningOut from '../../hooks/useSigningOut';

const TopNavigation = () => {
    const [user] = useContext(UserContext);
    const { signOut } = useSigningOut();

    return(
        <StyledWrapper>
            <div className="logo">
                <Logo />
            </div>
            <ul>
                <li><Link to="/">HOME</Link></li>
                <li><Link to="/account">KONTO</Link></li>
            </ul>
            <p> {!user ?
                <Link to="/signin">Zaloguj</Link>
                :
                <span onClick={signOut}>Wyloguj</span>}
            </p>
        </StyledWrapper>
    );
};

export default TopNavigation;