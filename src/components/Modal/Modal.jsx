import React from "react";
import classes from './Modal.module.css';

export default function Modal({active, setActive}) {
    return(
        <div className={active ? classes.modal + ' ' + classes.active : classes.modal} onClick={() => {setActive(false); document.location.href = './';}}>
            <div className={active ? classes.modal__content + ' ' + classes.active : classes.modal__content} onClick={e => e.stopPropagation()}>
                <h2>Заявка отправлена</h2>
                <p>Ваша заявка отправлена на почту сайта. В ближайшее время её обработуют и с вами свяжется наш специалист.</p>
                <div className={classes.inputs}>
                    <input type="button" name="form_btn" value='Ок' onClick={() => {setActive(false); document.location.href = './';} }/>
                    <input type="button" name="form_btn" value='Закрыть' onClick={() => {setActive(false); document.location.href = './';} }/>
                </div>
                <div className={classes.image}>
                    <img src="./images/plus.png" alt="" onClick={() => {setActive(false); document.location.href = './'}}/>
                </div>
            </div>
        </div>
    )
}