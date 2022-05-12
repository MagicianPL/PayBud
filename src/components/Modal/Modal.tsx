import React from 'react';
import { BsInfoCircle } from 'react-icons/bs';

import StyledOverlay from './StyledOverlay';
import StyledModal from './StyledModal';
import StyledButton from '../StyledButton/StyledButton';

interface IProps {
    showCostInfo?: boolean
}

const Modal: React.FC<IProps> = ({ showCostInfo }) => {
    const costInfo = (<>
                        <p>W trosce o jak najniższe koszta i bezpieczeństwo portal Paylink obsługuje niezależna bramka płatności Stripe, która poprzez karty płatnicze Visa czy MasterCard pobiera <strong>niską opłatę w wysokości 1.4% kwoty + 1zł.</strong></p>
                        <p>Kwota ta zostanie odliczona od sumarycznej kwoty zapłaconej przez Klienta.</p>
                    </>);

    return(
        <>
            <StyledOverlay>
                <StyledModal>
                    <header>
                        <BsInfoCircle />
                    </header>
                    <div className="modalBody">
                        {showCostInfo && costInfo}
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