import React from 'react';
import './AppDownload.css';
import { assets } from '../../assets/assets'; // Fixed path

const AppDownload = () => {
    return (
        <div className="app-download" id="app-download">
            <p>For a better experience, download <br /> the Tomato App</p>
            <div className="app-download-platforms">
                <img src={assets.play_store} alt="Download on Play Store" />
                <img src={assets.app_store} alt="Download on App Store" />
            </div>
        </div>
    );
};

export default AppDownload;
