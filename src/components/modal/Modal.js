import React from 'react';
import './Modal.scss';

function Modal(props) {
  return (
    <div className="modal">
        <div className="modal__box">
                <div className="modal__head">
                    <div className="title">Rules</div>
                    <div className="close" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/icon-close.svg)` }} onClick={() => props.show()}></div>
                </div>

                <div className="modal__body">
                    <div
                        style={{ backgroundImage: props.rule === 3 ? `url(${process.env.PUBLIC_URL}/assets/images/image-rules.svg)` : `url(${process.env.PUBLIC_URL}/assets/images/image-rules-bonus.svg)` }}
                        className={props.rule === 3 ? 'image triagle' : 'image pentagon'}></div>
                </div>
        </div>
    </div>
  );
}

export default Modal;
