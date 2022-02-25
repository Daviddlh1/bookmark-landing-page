import React, {useState} from "react";
import styles from "./FaqSection.module.css"


const content = [
{
    title: "What is Bookmark",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis."
},
{
    title: "How can I request a new browser?",
    content:"Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet."
},
{
    title: "Is there a mobile app?",
    content:"Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed sollicitudin ex et ultricies bibendum."
},
{
    title: "What about other Chromium browsers?",
    content: "Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam vitae neque eget nisl gravida pellentesque non ut velit."
}
]


export default function FaqSection() {
    const[selected, setSelected] = useState(null)
    function clickHandler(i) {
        if(selected == i){
            return setSelected(null);
        }
        setSelected(i)
        console.log()
    }
    return(
        <div className={styles.faq_container}>
            <div className={styles.title_container}>
                <h2>Frequently Asked Questions</h2>
                <p>
                    Here are some of our FAQs. If you have any other questions you’d like 
                    answered please feel free to email us.
                </p>
            </div>
            <div className={styles.faq_accordion_container}>
                <ul className={styles.list}>
                    {content.map((c,i) => {
                        return(
                            <li key = {i}>
                                <div className={styles.list_item}>
                                    <div id="first" onClick={()=>clickHandler(i)} className={styles.list_item_title}>
                                        <h3 id="first">{c.title}</h3>
                                        <div className={selected ===i? styles.active_img: styles.div}></div>
                                    </div>
                                    <p className={selected === i? styles.active : styles.content}>{c.content}</p>
                                </div>
                            </li>
                        )
                    })}
 
                </ul>
            </div>
            <button className={styles.button}>More info</button>
        </div>
    )
}