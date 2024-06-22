import React, { useState } from 'react';
import './MainPage.css';

const Main = () => {
    const [tasks, setTasks] = useState([]);
    const [taskItem, setTaskItem] = useState('');

    const handleTaskAddition = () => {
        if (taskItem.trim() !== '') {
            setTasks([...tasks, { id: Date.now(), item: taskItem }]);
            setTaskItem('');
        }
    }

    const handleTaskRemoval = (taskId) => {
        setTasks(tasks.filter(task => task.id !== taskId));
    }

    return (
        <section>
            <div className='title-wrapper'>
                <img src='/calender-image.svg' width={130} height={115} alt='calender image' className='img' />
                <h2 className='h2'>
                    Wondering where <br />
                    your tasks are?
                </h2>
            </div>

            <ul className='task-list'>
                {tasks.map(task => (
                    <li key={task.id} className='task-item' data-task-item="">
                        <button className="item-icon" data-task-remove="complete" onClick={() => handleTaskRemoval(task.id)}>
                            <span className="check-icon"></span>
                        </button>

                        <p className="item-text">{task.item}</p>

                        <button className="item-action-btn" aria-label="Remove task" data-task-remove onClick={() => handleTaskRemoval(task.id)}>
                            <ion-icon name="trash-outline" aria-hidden="true"></ion-icon>
                        </button>
                    </li>
                ))}
            </ul>

            <div className='input-wrapper' title="Add a task in 'My Day'">
                <input
                    type='text'
                    name='task'
                    aria-label='Add task'
                    maxLength={100}
                    placeholder="Try typing 'Jogging 20min at morning'"
                    className='input-field'
                    value={taskItem}
                    onChange={e => setTaskItem(e.target.value)}
                    onKeyDown={e => {
                        if (e.key === 'Enter') {
                            handleTaskAddition();
                        }
                    }}
                />
                <span className='input-text'>
                    Add a task
                </span>
                <div className='input-icon'  onClick={handleTaskAddition}>
                    <ion-icon name="add-outline" class="add-icon" aria-hidden="true"></ion-icon>

                    <ion-icon name="ellipse-outline" class="circle-icon" aria-hidden="true"></ion-icon>
                </div>
            </div>
        </section>
    );
}

export default Main;
