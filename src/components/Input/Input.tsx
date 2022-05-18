import React, { useRef, useState } from 'react';

import StyledWrapper from './StyledWrapper';

interface IProps {
    id: string
    label?: string
    type?: string
    placeholder?: string
    value?: string
    onChange?: any
    name?: string
    pulsate?: boolean
    className?: string
}

const Input: React.FC<IProps> = ({ id, label, type, placeholder, value, onChange, name, pulsate, className }) => {
    const inputRef = useRef(null);
    const wrapperRef = useRef(null);
    const [inputOnFocus, setInputOnFocus] = useState(false);

    const onFocus = () => {
        setInputOnFocus(true);
    };

    const onBlur = () => {
        setInputOnFocus(false);
    }

    if (type === 'textarea') return (
        <StyledWrapper ref={wrapperRef} className={inputOnFocus ? "animation" + className : className}>
            <label htmlFor={id}>{label}</label>
            <textarea id={id} placeholder={placeholder && placeholder} value={value} onChange={onChange} />
        </StyledWrapper>
    );

    return(
        <StyledWrapper ref={wrapperRef} className={inputOnFocus ? "animation" : undefined}>
            <label htmlFor={id}>{label}</label>
            <input id={id} type={type ? type : 'text'} name={name} placeholder={placeholder && placeholder} value={value} onChange={onChange} ref={inputRef} onFocus={pulsate ? onFocus : undefined} onBlur={pulsate ? onBlur : undefined} />
        </StyledWrapper>
    );
};

export default Input;