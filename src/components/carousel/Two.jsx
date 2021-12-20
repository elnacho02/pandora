import React, { useEffect } from 'react'
import 'animate.css'
import wow from 'wowjs'
import s from './Carousel.module.css'
function Two() {
  useEffect(() => {
    new wow.WOW().init()
  }, [])
  return (
    <div className='wow  animate__animated animate__slideInLeft animate__slow'>
      <div className={s.mainContainer}>
        <div className={s.containerSecond}>
          <div className={s.textSide}>
            <h2>2 tipos de suscripciones</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit, velit? Similique in incidunt qui aut adipisci?
              Repellendus quas nobis tempore quod, excepturi accusantium saepe
              est odit aut, iure repudiandae reprehenderit.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit, velit? Similique in incidunt qui aut adipisci?
              Repellendus quas nobis tempore quod, excepturi accusantium saepe
              est odit aut, iure repudiandae reprehenderit.
            </p>
          </div>
          <div>
            <img src={require('../../media/vieja1.png')} alt='' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Two
