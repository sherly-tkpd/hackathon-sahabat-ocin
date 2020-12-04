import React, { useEffect } from 'react';
import { useParams, useHistory } from "react-router-dom";
import products from "../../constants/products";
import WebXRFunction from './components/WebXR';

const canUseDOM = Boolean(typeof window !== 'undefined' && window.document && window.document.createElement);

const WebXR = () => {
    const { slug = "" } = useParams();
    const history = useHistory();
    const product = products.filter((product) => product.slug === slug)[0] || {};

    useEffect(() => {
        if (canUseDOM) new WebXRFunction(product.objectURL);
    }, [])

    const handleBack = () => {
        history.goBack();
    }

    return (
        <div id="webxr-main" className="cssWebXRMain">
            <div id="enter-ar-info" className="cssWebXRCard">
                <h2 className="cssWebXRTitle">Augmented Reality with the WebXR Device API</h2>
                <div className="cssWebXRDescription">
                    This is an experiment using augmented reality features with the WebXR Device API.
                    Upon entering AR, you will place product to somewhere at your place.
                </div>
                <div className="cssWebXRButtonWrapper">
                    <div id="enter-ar" className="cssWebXRMainButton">Start augmented reality</div>
                    <div className="cssWebXRButton" onClick={handleBack}>Back</div>
                </div>
            </div>
            <div id="unsupported-info" className="cssWebXRCard">
                <h2 className="cssWebXRTitle">Unsupported Browser</h2>
                <div className="cssWebXRDescription">
                    Your browser does not support AR features with WebXR.
                </div>
                <div className="cssWebXRButtonWrapper">
                    <div className="cssWebXRButton" onClick={handleBack}>Back</div>
                </div>
                </div>
            <div id="stabilization"></div>
            <div id="backbutton" className="cssWebXRBack" onClick={handleBack}><div className="arrow left" /></div>
        </div>
    );
};

export default WebXR;