import React, { useState } from "react";
import { validateInn } from '../../hooks/validateData';

export default function Input(props) {
    const [error, setError] = useState(false);
    const [textError, setTextError] = useState(false);

    function onChangeValue(e) {
        (!validate(e)) ? props.getInputValue(e.target.value, props.id) : props.getInputValue(null, props.id);
    }

    function validate(e) {
        if (props.validate === 'length') {
            const res = validateInn(e.target.value);

            if (res.status) {
                setError(false);
                return false;
            }

            setTextError(res.error);
            setError(true);
            return true;

        }


        if (props.validate === 'count') {

            if (e.target.value >= 1 && e.target.value <= 1000) {
                setError(false);
                return false;
            }

            if (e.target.value >= 1001) {
                setTextError('Превышен лимит');
                setError(true);
                return true;
            }
            if (e.target.value <= 0 || e.target.value == '') {
                setTextError('Введите значение');
                setError(true);
                return true;
            }
        }
    }

    return (
        <div className="search__item">
            <label htmlFor="inn" className="search__label label">{props.label} <sup>*</sup></label>
            <input
                // defaultValue={props.defValue}
                onBlur={validate}
                onChange={onChangeValue}
                type={props.type}
                className={"search__input input input--inn " + (error ? 'input--error' : '')}
                placeholder={props.placeholder} />
            <p className={"search__error error " + (error ? '' : 'hide')}>{textError}</p>
        </div>
    )
}