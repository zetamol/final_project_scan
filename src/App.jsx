import React from "react";

import { StrictMode } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { connect } from "react-redux";

import Header from "./components/elements/Header";
import Footer from "./components/elements/Footer";
import Preloader from "./components/elements/Preloader";

import Index from "./pages/Index";
import Auth from "./pages/Auth";
import Res from "./pages/Res";
import Search from "./pages/Search";
import NotFoundPage from "./pages/NotFoundPage";

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            preloader: false,
        }

    }

    showPreloader($value) {
        this.setState({
            preloader: $value
        })
    }

    componentDidMount() {
        if (localStorage.getItem('accessToken') !== null) {
            this.props.editAuth(true);
        }
    }

    render() {
        return (
            <div>

                <BrowserRouter>
                    {/* <Preloader preloader={this.state.preloader} /> */}
                    <Header />
                    <Routes>
                        <Route path="/" element={<Index />} />
                        <Route path="/search" element={<Search preloader={this.showPreloader.bind(this)} />} />
                        <Route path="/auth" element={<Auth preloader={this.showPreloader.bind(this)} />} />
                        <Route path="/res" element={<Res />} />
                        <Route path="*" element={<NotFoundPage />} />
                    </Routes>
                    <Footer />
                </BrowserRouter>

            </div>
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
)(App);