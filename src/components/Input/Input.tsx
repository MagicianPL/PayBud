import React from 'react';

import StyledWrapper from './StyledWrapper';

interface IProps {
    id: string
    label?: string
    type?: string
    placeholder?: string
    value?: string
    onChange?: () => void
}

const Input: React.FC<IProps> = ({ id, label, type, placeholder, value, onChange}) => {
    return(
        <StyledWrapper>
            <label htmlFor={id}>{label}</label>
            <input id={id} type={type ? type : 'text'} placeholder={placeholder && placeholder} value={value} />
        </StyledWrapper>
    );
};

export default Input;