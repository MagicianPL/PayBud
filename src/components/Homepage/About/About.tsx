import React, { useEffect } from 'react';
import CountUp from 'react-countup';
import { InView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { Oval } from 'react-loader-spinner';

import StyledWrapper from './StyledWrapper';
import Logo from '../../Logo/Logo';
import StyledButton from '../../StyledButton/StyledButton';
import useGetTotalTransactionsAmount from '../../../hooks/useGetTotalTransactionsAmount';

const About = () => {
    const { getTotalTransactionsAmount, loadingAmount, amount, amountError } = useGetTotalTransactionsAmount();

    useEffect(() => {
        getTotalTransactionsAmount()
    }, [getTotalTransactionsAmount]);

    return(
        <StyledWrapper>
            <div className="flex">
                <div>
                    <p>Zarządzaj płatnościami.<br />
                        Zarządzaj zamówieniami.<br />
                        Prosto i szybko w jednym miejscu.
                    </p>
                    <p className="info">PayBud to Twój osobisty system zarządzania.<br />
                        Dodawaj transakcje, przypinaj do nich własne notatki, edytuj, usuwaj, zarządzaj.</p>
                    <StyledButton><Link to="/signup">Załóż konto</Link></StyledButton>
                </div>
                <div className="logo">
                    <Logo />
                </div>
            </div>

            { loadingAmount && <div className="loadingAmount"><Oval
            ariaLabel="loading-indicator"
            height={70}
            width={70}
            strokeWidth={5}
            strokeWidthSecondary={1}
            color="blue"
            secondaryColor="white" /></div> }

            { (!loadingAmount && amount) &&
                <InView triggerOnce threshold={1}>
                {({inView, ref, entry}) => {
                    return (
                        <p ref={ref} className="counter">Wygenerowaliśmy już <strong>{inView ? <CountUp end={amount} duration={1} /> : 0} transakcji</strong></p>
                    );
                    }
                }
                </InView>
            }

            { (!loadingAmount && amountError) &&
                <p className="counter">Wygenerowaliśmy już <strong>całe mnóstwo transakcji</strong></p>
            }
        </StyledWrapper>
    );
};

export default About;