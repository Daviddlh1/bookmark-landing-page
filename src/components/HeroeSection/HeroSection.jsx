import React from "react";
import heroImage from "../../assets/images/illustration-hero.svg"
import styles from "./HeroSection.module.css"




export default function HeroSection() {
    return (
        <div className={styles.container}>
            <img className={styles.image} src={heroImage} alt="" />
            <div className={styles.info_container}>
                <h1>A Simple Bookmark Manager</h1>
                <p>
                    A clean and simple interface to organize your favourite websites. Open a new 
                    browser tab and see your sites load instantly. Try it for free.
                </p>
                <div className={styles.buttons_container}>
                    <button>Get it on Chrome</button>
                    <button>Get ir on Firefox</button>
                </div>
            </div>
        </div>
    )
}