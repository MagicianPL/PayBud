import React, { useRef, useState } from 'react';

import StyledWrapper from './StyledWrapper';

interface IProps {
    id: string
    label?: string
    type?: string
    placeholder?: string
    value?: string
    onChange?: () => void
    pulsate?: boolean
}

const Input: React.FC<IProps> = ({ id, label, type, placeholder, value, onChange, pulsate}) => {
    const inputRef = useRef(null);
    const wrapperRef = useRef(null);
    const [inputOnFocus, setInputOnFocus] = useState(false);

    const onFocus = () => {
        console.log(inputRef.current);
        setInputOnFocus(true);
    };

    const onBlur = () => {
        setInputOnFocus(false);
    }

    return(
        <StyledWrapper ref={wrapperRef} className={inputOnFocus ? "animation" : undefined}>
            <label htmlFor={id}>{label}</label>
            <input id={id} type={type ? type : 'text'} placeholder={placeholder && placeholder} value={value} ref={inputRef} onFocus={pulsate ? onFocus : undefined} onBlur={pulsate ? onBlur : undefined} />
        </StyledWrapper>
    );
};

export default Input;