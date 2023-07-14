import React from "react";


class Footer extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <footer className="footer">
                <div className="container">
                    <div className="footer__wrapper">
                        <div className="footer__inner footer__inner--logo"></div>
                        <div className="footer__inner footer__inner--contacts">
                            <div className="footer__contacts">
                                г. Москва, Цветной б-р, 40
                                <a href="" className="footer__link">+7 495 771 21 11</a>
                                <a href="" className="footer__link">info@skan.ru</a>
                            </div>
                            <div className="footer__cop">
                                Copyright. 2022
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;