import React from 'react';

import StyledOverlay from './StyledOverlay';
import StyledModal from './StyledModal';

const Modal = () => {
    return(
        <>
            <StyledOverlay>
                <StyledModal />
            </StyledOverlay>
        </>
    );
};

export default Modal;