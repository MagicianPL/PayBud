import React from 'react';
import { BsInfoCircle } from 'react-icons/bs';
import { Oval } from 'react-loader-spinner';

import StyledOverlay from './StyledOverlay';
import StyledModal from './StyledModal';
import StyledButton from '../StyledButton/StyledButton';

interface IProps {
    showCostInfo?: boolean
    modalMessage?: string
    modalError?: string
    onClick?: () => void
}

const Modal: React.FC<IProps> = ({ showCostInfo, modalMessage, modalError, onClick }) => {
    const costInfo = (<>
                        <p>W trosce o jak najniższe koszta i bezpieczeństwo portal Paylink obsługuje niezależna bramka płatności Stripe, która poprzez karty płatnicze Visa czy MasterCard pobiera <strong>niską opłatę w wysokości 1.4% kwoty + 1zł.</strong></p>
                        <p>Kwota ta zostanie odliczona od sumarycznej kwoty zapłaconej przez Klienta.</p>
                    </>);

    return(
        <>
            <StyledOverlay>
                <StyledModal>
                    <header>
                        { (modalMessage || modalError) && <BsInfoCircle />}
                    </header>
                    <div className="modalBody">
                        {showCostInfo && costInfo}
                        { modalMessage && <p>{modalMessage}</p> }
                        { modalError && <p className="error">{modalError}</p> }
                        { (!modalMessage && !modalError && !showCostInfo) &&
                            <div className="loading">
                            <Oval
                            ariaLabel="loading-indicator"
                            height={100}
                            width={100}
                            strokeWidth={5}
                            strokeWidthSecondary={1}
                            color="blue"
                            secondaryColor="white"
                          />
                          </div>
                        }
                    </div>
                    <footer>
                        { (modalMessage || modalError || showCostInfo) && 
                        <StyledButton onClick={onClick}>OK</StyledButton>
                        }
                    </footer>
                </StyledModal>
            </StyledOverlay>
        </>
    );
};

export default Modal;