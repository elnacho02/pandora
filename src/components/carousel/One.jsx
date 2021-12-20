import React, { useEffect } from 'react'
import 'animate.css'
import wow from 'wowjs'
import s from './Carousel.module.css'
function One() {
  useEffect(() => {
    new wow.WOW().init()
  }, [])
  return (
    <div
      className='wow  animate__animated animate__slideInRight '
      
    >
      <div className={s.mainContainer}>
        <div className={s.container}>
          <div>
            <img src={require('../../media/loko1.png')} alt='' />
          </div>
          <div className={s.textSide}>
            <h2>Destinado a quienes</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit, velit? Similique in incidunt qui aut adipisci?
              Repellendus quas nobis tempore quod, excepturi accusantium saepe
              est odit aut, iure repudiandae reprehenderit.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default One
