import React, { useEffect, useState } from "react";
import './assets/webxr.css';

const WebXR = () => {
    const [supported, setSupported] = useState();

    useEffect(async () => {
        if (navigator.xr) {
            setSupported(false);
            return;
        }

        try {
            const device = await navigator.xr.requestDevice();

            const outputCanvas = document.createElement('canvas');
            const ctx = outputCanvas.getContext('xrpresent');

            const session = await this.device.requestSession({
                outputContext: ctx,
                environmentIntegration: true,
              });
        
              // If `requestSession` is successful, add the canvas to the
              // DOM since we know it will now be used.
              document.body.appendChild(outputCanvas);
        } catch (e) {
            setSupported(false);
            return;
        }
    })

    if (!supported){
        return (
            <div id="unsupported-info" className="demo-card mdl-card mdl-shadow--4dp">
                <div className="mdl-card__title">
                    <h2 className="mdl-card__title-text">Unsupported Browser</h2>
                </div>
                <div className="mdl-card__supporting-text">
                    Your browser does not support AR features with WebXR. Learn more about these features from the <a href="https://codelabs.developers.google.com/codelabs/ar-with-webxr">Building an augmented reality application with the WebXR Device API</a> Code Lab.
                </div>
            </div>
        );
    }
}

export default WebXR;