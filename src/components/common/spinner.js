import React from 'react';
import "./spinner.css";

export const Spinner = () => {
    return (
        <div id="loader-wrapper">
           <div className="spinner">
           <div className="double-bounce1"></div>
           <div className="double-bounce2"></div>
         </div>
        </div>
    )
}

