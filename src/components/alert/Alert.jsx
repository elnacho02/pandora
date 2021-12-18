import React from 'react'
import s from './Alert.module.css'
function Alert({ setIsOpen }) {
  return (
    <div className={s.overlay}>
      <div className={s.container}>
        <div className={s.x} onClick={() => setIsOpen(false)}>
          X
        </div>
        <div className={s.img}>
          <img src={require('../../media/pandora1 1.png')} alt='logo' />
        </div>
        <h4>¡Hola, che! Nos agarraste antes de que estemos listos.</h4>
        <div className={s.text}>
          <p>
            Estamos trabajando mucho para dar los últimos toques a Pandora. Las
            cosas vienen muy bien y estará todo listo para ayudarte con tu
            formación muy pronto.<br></br> Si queres que te enviemos un
            recordatorio junto con un descuentazo cuando estemos listos, ¡Sólo
            tenes que poner tu mail a continuación!
          </p>
        </div>
        <div className={s.select}>
          <select name='' id=''>
            <option value='value1' selected>
              Me interesa...
            </option>
            <option value='value2'>Value 2</option>
            <option value='value3'>Value 3</option>
          </select>
        </div>
        <div className={s.footer}>
          <div className={s.input}>
            <input type='email' placeholder='Tu email...' />
          </div>
          <button>¡Anotame!</button>
        </div>
      </div>
    </div>
  )
}

export default Alert
