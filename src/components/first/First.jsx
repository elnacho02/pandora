import React from 'react'
import s from "./First.module.css"


function First({setIsOpen, isOpen}) {
    return (
        <div className={s.container}>
            <div className={s.text}>
                <div className={s.title}>
                    <h2>College out.</h2>
                    <h2>Pandora in.</h2>
                </div>
                <p>
                    Get a zero-waste natural energy boost with MateCaps and quit sugary cafffeinated drinks.
                </p>
                <button onClick={()=>setIsOpen(true)}>Lorem ips</button>
            </div>
            <div className={s.img}>
                <img src={require("../../media/books.png")} alt="books" width="100%"/>
            </div>
            <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{"height": "100px", "width": "100%"}}><path d="M0.28,150.50 C138.54,145.56 353.55,158.39 504.79,88.33 L500.00,150.00 L0.28,150.50 Z"  style={{"stroke": "none", "fill": "#fff"}}></path></svg>
        </div>
    )
}

export default First
