import React, {useState} from "react";
import styles from "./NewsLetterSection.module.css";



export default function NewsLetterSection() {
    const [error, setError] = useState({});
    console.log(error.email)
    function validate(input) {
        const err = {}
        if(!input){
            err.email = 'This field is required if you want more info';
        }else if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input)) {
            err.email ='Whoops, make sure is an email';
        }
        console.log(err)
        return err;
    }
    function changeHandler(e) {
        console.log(e.target.value)
        setError(validate(e.target.value));
    }
    return(
        <div className={styles.container}>
            <div className={styles.internal_container}>
                <p>35,000+ already joined</p>
                <h3>Stay up-to-date with what we’re doing</h3>
                <div className={styles.external_container}>
                    <div className={styles.input_container}>
                        <div className={error.email?styles.error : styles.input}>
                            <input onChange={changeHandler} type="text" placeholder="Enter your email address" />
                            <div className={error.email?styles.error_icon : styles.inactive}></div>
                            <p className={error.email?styles.error_message : styles.inactive}>{error.email}</p>
                        </div>
                    </div>
                    <button className={styles.button}>Contact Us</button>
                </div>
            </div>
        </div>
    )
}