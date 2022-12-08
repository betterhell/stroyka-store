import React from 'react';
import classes from "./_Modal.module.scss"

const Modal = ({modalActive, setModalActive, children}) => {
    return (
        <div onClick={() => setModalActive(false)} className={modalActive ? `${classes.modal} ${classes.active}` : `${classes.modal}`}>
            <div onClick={(e) => e.stopPropagation()} className={classes.modal__content}>
                {children}
            </div>
        </div>
    );
};

export default Modal;