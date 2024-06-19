import React from 'react';
import './MainPage.css';

const Main = () => {

    return (
        <section>
            <div className='title-wrapper'>
                <img src='/calender-image.svg' width={130} height={115} alt='calender image' className='img' />
                <h2 className='h2'>
                    Wondering where <br />
                    your tasks are?
                </h2>
            </div>


            {/* Dynamic js here */}
            <ul className='task-list'></ul>

            <div className='input-wrapper' title="Add a task in 'My Day'">
                <input type='text' name='task' aria-label='Add task' maxLength={100} placeholder="Try typing 'Jogging 20min at morning'" className='input-field' />
                <span className='input-text'>
                    Add a task
                </span>
                <div className='input-icon'>
                    <ion-icon name="add-outline" class="add-icon" aria-hidden="true"></ion-icon>

                    <ion-icon name="ellipse-outline" class="circle-icon" aria-hidden="true"></ion-icon>
                </div>
            </div>
        </section>
    );
}

export default Main;