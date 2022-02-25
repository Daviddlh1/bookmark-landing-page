import React from "react";
import logo  from "../../assets/images/logo-bookmark-footer.svg";
import styles from "./FooterSection.module.css"



export default function FooterSection() {
    return (
        <div className={styles.container}>
            <img className={styles.image} src={logo} alt="logo"/>
            <div className={styles.info_container}>
                <p>Features</p>
                <p>Pricing</p>
                <p>Contact</p>
            </div>
            <div className={styles.social_media}>
                <div className={styles.facebook}></div>
                <div className={styles.twitter}></div>
            </div>
        </div>
    )
}