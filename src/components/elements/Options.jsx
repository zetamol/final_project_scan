export default function Options(props) {

    function onChangeValue(e) {
        props.getInputValue(e.target.value, 'options');
    }

    return (
        <div className="search__item">
            <label htmlFor="inn" className="search__label label">Тональность *</label>
            <select
                onChange={onChangeValue}
                className="search__options">
                <option value="null">Выберите значение</option>
                <option value="positive">Позитивная</option>
                <option value="negative">Негативная</option>
                <option value="any">Любая</option>
            </select>
        </div>
    )
}