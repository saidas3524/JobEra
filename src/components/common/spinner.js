import React from 'react';
import "./spinner.css";

export const Spinner = ({ local }) => {
    return (
        <div>
                {local? <Local/> : <Main/>}
        </div>

    )
}




const Main = () => {
    return (
        <div id="loader-wrapper">
            <div className="spinner1 mainSpinner">
                <div className="rect1"></div>
                <div className="rect2"></div>
                <div className="rect3"></div>
                <div className="rect4"></div>
                <div className="rect5"></div>
            </div>
        </div>
    )
}

const Local = () => {
    return (
        <div className="spinner1 localSpinner">
            <div className="rect1"></div>
            <div className="rect2"></div>
            <div className="rect3"></div>
            <div className="rect4"></div>
            <div className="rect5"></div>
        </div>
    )
}

