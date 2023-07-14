import React from "react";
import BtnSendForm from "./BtnSendForm";

class CheckBoxFieldsForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            maxFullness: null,
            inBusinessNews: null,
            onlyMainRole: null,
            advertisement: null,
            isDigest: null,
        }

    }

    componentDidMount() {
        this.props.getCheckBoxValue(this.state);
    }

    onChange(e) {
        const state = this.state;
        for (const key in state) {
            if (e.target.name === key) {
                state[key] = e.target.checked;
                this.setState(state);
            }
        }

        this.props.getCheckBoxValue(state);
    }


    render() {
        return (
            <div className="search__form-inner">
                <div className="search__item">
                    <input
                        onChange={this.onChange.bind(this)}
                        type="checkbox" className="search__checkbox checkbox" name="maxFullness" id="maxFullness" />
                    <label htmlFor="maxFullness" className="search__ch-label ch-label">Признак максимальной полноты</label>
                </div>
                <div className="search__item">
                    <input
                        onChange={this.onChange.bind(this)}
                        type="checkbox" name="inBusinessNews" id="inBusinessNews" className="search__checkbox checkbox" />
                    <label htmlFor="inBusinessNews" className="search__ch-label ch-label">Упоминания в бизнес-контексте</label>
                </div>
                <div className="search__item">
                    <input
                        onChange={this.onChange.bind(this)}
                        type="checkbox" name="onlyMainRole" id="onlyMainRole" className="search__checkbox checkbox" />
                    <label htmlFor="onlyMainRole" className="search__ch-label ch-label">Главная роль в публикации</label>
                </div>
                <div className="search__item">
                    <input
                        onChange={this.onChange.bind(this)}
                        type="checkbox" name="risk-factors" disabled id="risk-factors" className="search__checkbox checkbox" />
                    <label htmlFor="risk-factors" className="search__ch-label ch-label ch-label--disabled">Публикации только с
                        риск-факторами</label>
                </div>
                <div className="search__item">
                    <input
                        onChange={this.onChange.bind(this)}
                        type="checkbox" name="technical-news" disabled id="technical-news" className="search__checkbox checkbox" />
                    <label htmlFor="technical-news" className="search__ch-label ch-label ch-label--disabled">Включать технические
                        новости рынков</label>
                </div>
                <div className="search__item">
                    <input
                        onChange={this.onChange.bind(this)}
                        type="checkbox" name="advertisement" id="advertisement" className="search__checkbox checkbox" />
                    <label htmlFor="advertisement" className="search__ch-label ch-label">Включать анонсы и календари</label>
                </div>
                <div className="search__item">
                    <input
                        onChange={this.onChange.bind(this)}
                        type="checkbox" name="isDigest" id="isDigest" disabled className="search__checkbox checkbox" />
                    <label htmlFor="isDigest" className="search__ch-label ch-label">Включать сводки новостей</label>
                </div>

                <BtnSendForm
                    startSearch={this.props.startSearch}
                    requiredData={this.props.requiredData} />
            </div>
        )
    }
}

export default CheckBoxFieldsForm;