import React from 'react';
import CountUp from 'react-countup';
import { InView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';

import StyledWrapper from './StyledWrapper';
import Logo from '../../Logo/Logo';
import StyledButton from '../../StyledButton/StyledButton';

const About = () => {
    return(
        <StyledWrapper>
            <div className="flex">
                <div>
                    <p>Zarządzaj płatnościami.<br />
                        Zarządzaj zamówieniami.<br />
                        Prosto i szybko w jednym miejscu.
                    </p>
                    <p className="info">Paylink to Twój osobisty system zarządzania.<br />
                        Wygeneruj link do płatności, dodawaj notatki, otrzymywaj powiadomienia SMS.</p>
                    <StyledButton><Link to="/signup">Załóż konto</Link></StyledButton>
                </div>
                <div className="logo">
                    <Logo />
                </div>
            </div>
            <InView triggerOnce threshold={1}>
            {({inView, ref, entry}) => {
                return (
                    <p ref={ref} className="counter">Wygenerowaliśmy już <strong>{inView ? <CountUp end={26} duration={1} /> : 0} paylinków</strong></p>
                );
                }
            }
            </InView>
        </StyledWrapper>
    );
};

export default About;