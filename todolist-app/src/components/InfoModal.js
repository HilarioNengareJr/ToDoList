import React from 'react';
import './InfoModal.css';


const Modal = () => {

    return (

        <div className='app-info'>
            <div className='modal'>
                <h2 class="modal-title">App info</h2>

                <ul class="modal-list">

                    <li class="modal-item">
                        <strong class="strong">Version:</strong>

                        <span class="span">1.0.0</span>
                    </li>

                    <li class="modal-item">
                        <strong class="strong">Publish:</strong>

                        <span class="span">06 July 2024</span>
                    </li>

                    <li class="modal-item">
                        <strong class="strong">Last Update:</strong>

                        <span class="span">06 July 2024</span>
                    </li>

                    <li class="modal-item">
                        <strong class="strong">Created by:</strong>

                        <a href="#" target="_black" class="span">Hilario Nengare</a>
                    </li>

                </ul>

                <button class="modal-btn" data-modal-toggler>Ok</button>
            </div>
        </div>
    );
}

export default Modal;


