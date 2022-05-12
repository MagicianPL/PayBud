import React from 'react';
import { BsInfoCircle } from 'react-icons/bs';

import StyledOverlay from './StyledOverlay';
import StyledModal from './StyledModal';
import StyledButton from '../StyledButton/StyledButton';

const Modal = () => {
    return(
        <>
            <StyledOverlay>
                <StyledModal>
                    <header>
                        <BsInfoCircle />
                    </header>
                    <div className="modalBody">
                        <p>W trosce o jak najniższe koszta i bezpieczeństwo portal Paylink obsługuje niezależna bramka płatności Stripe, która poprzez karty płatnicze Visa czy MasterCard pobiera <strong>niską opłatę w wysokości 1.4% kwoty + 1zł.</strong></p>
                        <p>Kwota ta zostanie odliczona od sumarycznej kwoty zapłaconej przez Klienta.</p>
                    </div>
                    <footer>
                        <StyledButton>OK</StyledButton>
                    </footer>
                </StyledModal>
            </StyledOverlay>
        </>
    );
};

export default Modal;