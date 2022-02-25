import React from "react";
import styles from "./HamburgerMenu.module.css"



export default function HamburgerMenu() {
    return (<div className={styles.container}>
        {/* <div className={styles.logo_container}>
            <a href="/">White logo</a>
            <a href="/">close</a>
        </div> */}
        <ul className={styles.list}>
            <li>FEATURES</li>
            <li>PRICING</li>
            <li>CONTACT</li>
            <li><a href="/">LOGIN</a></li>
        </ul>
    </div>)
}