import React from 'react'
import s from "./Navbar.module.css"
function Navbar() {
    
    return (
        <div className={s.container}>
            <div className={s.links}>
                <a href="/" className={s.link}>Some of our</a>
                <a href="/" className={s.link}>How it works</a>
                <a href="/" className={s.link}>Some</a>
            </div>
            <div className={s.img}>
                <img src={require("../../media/pandora1 1.png")} alt="logo" />
            </div>
            <div className={s.links}>
                <a href="/" className={s.linkOrange}>Ulises do</a>
                <a href="/" className={s.link}>Price</a>
                <a href="/" className={s.linkOrange}>Contacts</a>    
            </div>
        </div>
    )
}

export default Navbar
