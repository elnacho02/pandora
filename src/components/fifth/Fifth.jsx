import React from 'react'
import s from "./Fifth.module.css"
function Fifth() {
    return (
        <div className={s.container}>
            <div className={s.experts}>
                <h3>Some of our most popular experts</h3>
                <div className={s.imagenes}>
                    <img src={require("../../media/ravier 1.png")} alt="ravier" width="10%"/>
                    <img src={require("../../media/rayo 1.png")} alt="rayo" width="10%"/>
                    <img src={require("../../media/albn 1.png")} alt="albn" width="10%"/>
                    <img src={require("../../media/milei 1.png")} alt="milei" width="10%"/>
                    <img src={require("../../media/kaiser 1.png")} alt="kaiser" width="10%"/>
                </div>
            </div>
            <div className={s.disciplines}>
                
            </div>
        </div>
    )
}

export default Fifth
