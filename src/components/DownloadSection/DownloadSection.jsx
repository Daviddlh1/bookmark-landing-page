import React from "react";
import googleLogo from "../../assets/images/logo-chrome.svg";
import fireFoxLogo from "../../assets/images/logo-firefox.svg";
import operaLogo from "../../assets/images/logo-opera.svg";
import styles from "./DownloadSection.module.css"




export default function DownloadSection() {
    return(
        <div className={styles.download_container}>
            <div>
                <h2>Download the extension</h2>
                <p>
                    We’ve got more browsers in the pipeline. Please do let us know if you’ve 
                    got a favourite you’d like us to prioritize.
                </p>
            </div>
            <div className={styles.cards_container}>
                <div className={styles.card}>
                    <img className={styles.logo} src={googleLogo} alt="Google-logo" />
                    <div className={styles.info_container}>
                        <h3>Add to Chrome</h3>
                        <p>Minimum version 62</p>
                        <div></div>
                        <button className={styles.button}>Add & Install Estension</button>
                    </div>
                </div>
                <div className={styles.card}>
                    <img className={styles.logo} src={fireFoxLogo} alt="firefox-logo" />
                    <div className={styles.info_container}>
                        <h3>Add to Firefox</h3>
                        <p>Minimum version 62</p>
                        <div></div>
                        <button className={styles.button}>Add & Install Estension</button>
                    </div>
                </div>
                <div className={styles.card}>
                    <img className={styles.logo} src={operaLogo} alt="opera-logo" />
                    <div className={styles.info_container}>
                        <h3>Add to Chrome</h3>
                        <p>Minimum version 62</p>
                        <div></div>
                        <button className={styles.button}>Add & Install Estension</button>
                    </div>
                </div>  
            </div>
        </div>
    )
}