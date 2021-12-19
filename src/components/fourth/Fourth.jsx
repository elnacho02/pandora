import React from 'react'
import s from "./Fourth.module.css"


function Fourth() {
    return (
        <div className={s.container}>
            <div className={s.head}>
                <div className={s.text}>
                    <div className={s.title}>
                        <h2>How it works.</h2>
                        <h2>Yerba Mate in.</h2>
                    </div>
                    <div className={s.pasos}>
                        <div className={s.primerPaso}>
                            <h4>1° Elegís qué o de quién aprender</h4>
                            <span>Por ej. -{">"} Economía o Axel Kaiser</span>
                        </div>
                        <div className={s.segundoPaso}>
                            <h4>2° Te enviamos mensualmente la propuesta</h4>
                        </div>
                    </div>
                </div>
                <div className={s.img}>
                    <img src={require("../../media/Frame 2.png")} alt="nose" width="70%" />
                </div>
            </div>
            <div className={s.experts}>
                
            </div>
        </div>
    )
}

export default Fourth
