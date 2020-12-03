import React, { useEffect, useState } from "react";
import App from './function2';
import './assets/webxr.css';

const canUseDOM = Boolean(typeof window !== 'undefined' && window.document && window.document.createElement);

const WebXR = () => {
    if(canUseDOM){
    const initialize = new App();
    }

    return (
        <div className="main">
            <div id="enter-ar-info" className="demo-card mdl-card mdl-shadow--4dp">
            <div className="mdl-card__title">
                <h2 className="mdl-card__title-text">Augmented Reality with the WebXR Device API</h2>
            </div>
            <div className="mdl-card__supporting-text">
                This is an experiment using augmented reality features with the WebXR Device API.
                Upon entering AR, you will be surrounded by a world of cubes.
                Learn more about these features from the <a href="https://codelabs.developers.google.com/codelabs/ar-with-webxr">Building an augmented reality application with the WebXR Device API</a> Code Lab.
            </div>
            <div className="mdl-card__actions mdl-card--border">
                <a id="enter-ar" className="mdl-button mdl-button--raised mdl-button--accent">
                Start augmented reality
                </a>
            </div>
            </div>
            <div id="unsupported-info" className="demo-card mdl-card mdl-shadow--4dp">
            <div className="mdl-card__title">
                <h2 className="mdl-card__title-text">Unsupported Browser</h2>
            </div>
            <div className="mdl-card__supporting-text">
                Your browser does not support AR features with WebXR. Learn more about these features from the <a href="https://codelabs.developers.google.com/codelabs/ar-with-webxr">Building an augmented reality application with the WebXR Device API</a> Code Lab.
            </div>
            </div>
            <div id="stabilization"></div>
        </div>
    )
}

export default WebXR;