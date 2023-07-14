import React from 'react';
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Main extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section className="main">
                <div className="container">
                    <div className="main__wrapper">
                        <div className="main__inner main__inner--text">
                            <h1 className="main__m-title m-title">
                                сервис <br /> по поиску публикаций <br /> о компании <br /> по его ИНН
                            </h1>
                            <div className="main__desc">
                                Комплексный анализ публикаций, получение данных в формате PDF на электронную почту.
                            </div>
                            <div className={"main__align " + (this.props.authStore.auth ? 'show' : 'hide')}>
                                <Link to="/search" className="main__btn btn">Запросить данные</Link>
                            </div>
                        </div>
                        <div className="main__inner main__inner--bg"></div>
                    </div>
                </div>
            </section>
        );
    }
}

export default connect(
    state => ({
        authStore: state.authStore
    }),
    dispatch => ({
        editAuth: (value) => {
            dispatch({ type: "AUTH", value: value })
        }
    })
)(Main);