import React, {useState} from "react";
import HamburgerMenu from "../HamburgerMenu/HamburberMenu";
import logoInactive from "../../assets/images/logo-bookmark.svg";
import logoActive from "../../assets/images/logo-bookmark-mobile-menu.svg";
import menuIconInactive from "../../assets/images/icon-hamburger.svg"
import menuIconActive from "../../assets/images/icon-close.svg"
import styles from "./NavBar.module.css";


export default function NavBar() {
    const [menuState, setMenuState] = useState(false);
    const [logo, setLogo] = useState(logoInactive)
    const [menuIcon, setMenuIcon] = useState(menuIconInactive)
    const [styleOnClick, setStylesOnClick] = useState(styles.inactive)
    
    function onClickHandler(e){
        e.preventDefault();
        logo === logoInactive? setLogo(logoActive) : setLogo(logoInactive);
        menuIcon === menuIconInactive? setMenuIcon(menuIconActive) : setMenuIcon(menuIconInactive);
        styleOnClick === styles.inactive? setStylesOnClick(styles.container): setStylesOnClick(styles.inactive)
        setMenuState(!menuState);
    }
    return (
        <div className={styleOnClick}>
            <a className={styles.logo} href="/"><img className={styles.logoImage} id="logo" src={logo} alt="" /></a>
            <ul className={styles.list}>
                <li>Features</li>
                <li>Pricing</li>
                <li>Contact</li>
                <li>Login</li>
            </ul>
            <a className={styles.menu_icon} href={styles.menu} onClick={onClickHandler}><img id="menu" src={menuIcon} alt="" /></a>
            {menuState && <HamburgerMenu/>}
        </div>
    )
}
