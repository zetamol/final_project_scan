import React from "react";
import Input from "./Input";
import InputDate from "./InputDate";
import Options from "./Options";

class InputFieldsForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            defValue: {
                inn: '7710137066',
                count: '8'
            },
            inputValues: {
                inn: null,
                ton: null,
                count: null,
                dateStart: null,
                dateEnd: null,
            }
        }
    }

    getInputValue(value, type) {
        const inputValues = this.state.inputValues;

        switch (type) {
            case 'inn':
                inputValues.inn = value;
                break;

            case 'options':
                if (value == 'null') value = null;
                inputValues.ton = value;
                break;

            case 'count':
                inputValues.count = value;
                break;

            case 'start-date':
                inputValues.dateStart = value;
                break;

            case 'end-date':
                inputValues.dateEnd = value;
                break;

            default:
                break;
        }

        this.setState({
            inputValues: inputValues
        })

        setTimeout(() => {
            const obj = this.state.inputValues;
            this.props.inputValue(false);

            for (const key in obj) {
                if (obj[key] === null) return;
                if (obj.dateStart > obj.dateEnd) return;
            }

            this.props.inputValue(true, this.state.inputValues);
        }, 1000);

    }

    render() {
        return (
            <div className="search__form-inner">

                <Input
                    defValue={this.state.defValue.inn}
                    label={'ИНН компании'}
                    getInputValue={this.getInputValue.bind(this)}
                    placeholder={'10-12 цифр'}
                    validate={'length'}
                    id={'inn'}
                    type={'number'}
                />

                <Options getInputValue={this.getInputValue.bind(this)} />

                <Input
                    defValue={this.state.defValue.count}
                    label={'Количество документов в выдаче'}
                    getInputValue={this.getInputValue.bind(this)}
                    placeholder={'От 1 до 1000'}
                    validate={'count'}
                    id={'count'}
                    type={'number'}
                />

                <InputDate
                    getInputValue={this.getInputValue.bind(this)}
                />

            </div>
        )
    }
}


export default InputFieldsForm;