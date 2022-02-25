import React, {useState} from "react";
import styles from "./FeaturesSection.module.css";
import tab1 from "../../assets/images/illustration-features-tab-1.svg";
import tab2 from "../../assets/images/illustration-features-tab-2.svg"
import tab3 from "../../assets/images/illustration-features-tab-3.svg"

export default function FeaturesSection() {
    const [display, setDisplay] = useState('0')
    const [anchorsStyles, setAnchorsStyles] = useState(styles.anchor_inactive)
    function clickHandler(e){
        e.preventDefault();
        setDisplay(e.target.id)
        anchorsStyles === styles.anchor_inactive? setAnchorsStyles(styles.anchor_active): setAnchorsStyles(styles.anchor_inactive);
    }
    return(
        <div className={styles.features_container}>
            <div className={styles.features}>
                <h2>Features</h2>
                <p>
                    Our aim is to make it quick and easy for you to access your favourite websites. 
                    Your bookmarks sync between your devices so you can access them on the go.
                </p>
            </div>
            <div className={styles.list_container}>
                <ul className={styles.list}>
                    <li id="0"><a className={anchorsStyles} href="/" id="0" onClick={clickHandler}>Simple Bookmarking</a></li>
                    <li id="1"><a className={anchorsStyles} href="/" id="1" onClick={clickHandler}>Speedy Searching</a></li>
                    <li id="2"><a className={anchorsStyles} href="/" id="2" onClick={clickHandler}>Easy Sharing</a></li>
                </ul>
            </div>
            <div className={styles.slides}>
                {display == 0 && (<div className={styles.slide_container}>
                    <img className={styles.image} src={tab1}  alt="slide-picture"/>
                    <div className={styles.info}>
                        <h2>Bookmark in one click</h2>
                        <p>
                        Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.    
                        </p>
                        <button className={styles.button}>More info</button>
                    </div>
                </div>)}
                {display == 1 && (<div className={styles.slide_container}>
                    <img className={styles.image} src={tab2}  alt="slide-picture"/>
                    <div className={styles.info}>
                        <h2>Intelligent search</h2>
                        <p>
                            Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.  
                        </p>

                        <button className={styles.button}>More info</button>
                    </div>
                </div>)}
                {display == 2 && (<div className={styles.slide_container}>
                    <img className={styles.image} src={tab3}  alt="slide-picture"/>
                    <h2>Share your bookmarks</h2>
                    <p>
                        Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.    
                    </p>
                    <button className={styles.button}>More info</button>
                </div>)}
            </div>
            <div>

            </div>
        </div>
    )
}