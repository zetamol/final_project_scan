import React, { useState } from "react";

export default function InputDate(props) {
    const [error, setError] = useState(false);
    const [textError, setTextError] = useState('Введите корректные данные');
    const [date, setDate] = useState({ start: null, end: null });

    function onChangeValue(e) {

        if (e == null) return;

        if (e.target.classList.contains('input--date-start')) {

            setDate(prevState => ({
                ...prevState,
                start: e.target.value
            }));

            let error = validate(e.target.value, date.end);
            if (error) {
                props.getInputValue(null, 'start-date');
            } else {
                props.getInputValue(e.target.value, 'start-date');
            }

        }

        if (e.target.classList.contains('input--date-end')) {

            setDate(prevState => ({
                ...prevState,
                end: e.target.value
            }));

            let error = validate(date.start, e.target.value);
            if (error) {
                props.getInputValue(null, 'end-date');
            } else {
                props.getInputValue(e.target.value, 'end-date');
            }
        }

    }

    function validate(valueStart, valueEnd) {
        const res = [valueStart, valueEnd];
        const today = formatDate(new Date());

        for (let i = 0; i < res.length; i++) {

            if (res[i] > today) {
                setError(true);
                setTextError('даты не должны быть в будущем времени');
                return true;
            } else {
                setError(false);
            }

        }

        if (valueStart > valueEnd) {
            setError(true);
            setTextError('дата начала не может быть позже даты конца');
            return true;
        } else {
            setError(false);
        }
    }

    function formatDate(date) {

        let dd = date.getDate();
        if (dd < 10) dd = '0' + dd;

        let mm = date.getMonth() + 1;
        if (mm < 10) mm = '0' + mm;

        let yy = date.getFullYear();
        if (yy < 10) yy = '0' + yy;

        return yy + '-' + mm + '-' + dd;
    }

    return (
        <div className="search__wrap-item">
            <label className="search__label label">Диапазон поиска <sup>*</sup></label>
            <div className="search__wrap-input">
                <input
                    onChange={onChangeValue}
                    type="date"
                    className="search__input input input--date-start"
                    name="date" />
                <input
                    onChange={onChangeValue}
                    type="date"
                    className="search__input input input--date-end"
                    name="date2" />
                <p className={"search__error error " + (error ? '' : 'hide')}>{textError}</p>
            </div>
        </div>
    )
}