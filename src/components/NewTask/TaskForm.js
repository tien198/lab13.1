import React, { useRef } from 'react'
import Section from '../UI/Section';

// css
import styles from './TaskForm.module.css'
import { postTask } from '../../ultilities/httpRequest';

function TaskForm() {
    const taskInputRef = useRef()
    async function addTask(task) {
        try {
            await postTask(task)
        } catch (err) {
            console.warn(err.message)
        }
    }
    function onSubmit(e) {
        e.preventDefault()
        const task = taskInputRef.current.value
        addTask(task)
        // clear input
        taskInputRef.current.value = ''
    }
    return (
        <Section>
            <form className={styles['form']} onSubmit={onSubmit}>
                <input type='text' ref={taskInputRef} />
                <button>Add Task</button>
            </form>
        </Section>
    );
}

export default TaskForm;