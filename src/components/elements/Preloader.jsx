import React from "react";

export default function Preloader(props) {
    return (
        <div className={"preloader " + (props.preloader ? "" : "hide")}>
            <div className="preloader__overlay">
                <div className="preloader__element">
                </div>
            </div>
        </div>
    )
}