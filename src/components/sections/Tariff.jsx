import React from 'react';
import { connect } from "react-redux";

function Tariff($props) {
    return (
        <section className="tariff" id="tariff">
            <div className="container">
                <h2 className="why-me__s-title s-title">Наши тарифы</h2>
                <div className="tariff__wrapper">

                    <div className={"tariff__card card card--beginner " + ($props.authStore.auth ? "active" : '')}>
                        <div className="card__header card__header">
                            <div className="card__title">Beginner</div>
                            <div className="card__desc">Для небольшого исследования</div>
                            <div className="card__ico">
                                <img src="./images/svg/ico-tarif-1.svg" alt="" />
                            </div>
                        </div>
                        <div className="card__body">
                            <div className="card__info">Текущий тариф</div>
                            <div className="card__wrap-price">
                                <div className="card__price card__price-now">799 <span>&#8381;</span></div>
                                <div className="card__price card__price--old">1 200 <span>&#8381;</span></div>
                                <div className="card__price-desc">
                                    или 150 ₽/мес. при рассрочке на 24 мес.
                                </div>
                            </div>
                            <div className="card__sub-title">
                                В тариф входит:
                            </div>
                            <ul className="card__list">
                                <li className="card__item">Безлимитная история запросов</li>
                                <li className="card__item">Безопасная сделка</li>
                                <li className="card__item">Поддержка 24/7</li>
                            </ul>
                        </div>
                        <div className="card__footer">
                            <button 
                            disabled={$props.authStore.auth}
                            className="card__btn btn">Перейти в личный кабинет</button>
                        </div>
                    </div>

                    <div className="tariff__card card card--PRO">
                        <div className="card__header card__header">
                            <div className="card__title">PRO</div>
                            <div className="card__desc">Для HR и фрилансеров</div>
                            <div className="card__ico">
                                <img src="./images/svg/ico-tarif-2.svg" alt="" />
                            </div>
                        </div>
                        <div className="card__body">
                            <div className="card__wrap-price">
                                <div className="card__price card__price-now">1 299 <span>&#8381;</span></div>
                                <div className="card__price card__price--old">2 600 <span>&#8381;</span></div>
                                <div className="card__price-desc">
                                    или 279 ₽/мес. при рассрочке на 24 мес.
                                </div>
                            </div>
                            <div className="card__sub-title">
                                В тариф входит:
                            </div>
                            <ul className="card__list">
                                <li className="card__item">Все пункты тарифа Beginner</li>
                                <li className="card__item">Экспорт истории</li>
                                <li className="card__item">Рекомендации по приоритетам</li>
                            </ul>
                        </div>
                        <div className="card__footer">
                            <button className="card__btn btn">Подробнее</button>
                        </div>
                    </div>

                    <div className="tariff__card card card--business">
                        <div className="card__header card__header">
                            <div className="card__title">Business</div>
                            <div className="card__desc">Для корпоративных клиентов</div>
                            <div className="card__ico">
                                <img src="./images/svg/ico-tarif-3.svg" alt="" />
                            </div>
                        </div>
                        <div className="card__body">
                            <div className="card__wrap-price">
                                <div className="card__price card__price-now">2 379 <span>&#8381;</span></div>
                                <div className="card__price card__price--old">3 700 <span>&#8381;</span></div>
                                <div className="card__price-desc">
                                    или 150 ₽/мес. при рассрочке на 24 мес.
                                </div>
                            </div>
                            <div className="card__sub-title">
                                В тариф входит:
                            </div>
                            <ul className="card__list">
                                <li className="card__item">Все пункты тарифа Pro</li>
                                <li className="card__item">Безлимитное количество запросов</li>
                                <li className="card__item">Приоритетная поддержка</li>
                            </ul>
                        </div>
                        <div className="card__footer">
                            <button className="card__btn btn">Перейти в личный кабинет</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default connect(
    state => ({
        authStore: state.authStore
    })
)(Tariff);