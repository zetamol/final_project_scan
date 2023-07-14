import React from "react";

export default function BtnSendForm(props) {

    function onHandleClick(e) {
        e.preventDefault();
        props.startSearch();
    }

    return (
        <div className="search__align">
            <input
                onClick={onHandleClick}
                type="submit"
                disabled={(props.requiredData) ? "" : "disabled"}
                className={"search__btn btn " + (props.requiredData ? "" : "disabled")} value="Поиск" />
            <span>* Обязательные к заполнению поля</span>
        </div>
    )
}