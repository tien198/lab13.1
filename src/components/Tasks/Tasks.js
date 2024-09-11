import React from 'react'
import Section from '../UI/Section';
// css
import styles from './Tasks.module.css'
import TaskItem from './TaskItem';


import { useEffect, useState } from 'react'
import { getTasks } from '../../ultilities/httpRequest';
function useFetch(fetchFn) {
    const [tasks, setTasks] = useState([])

    useEffect(() => {
        async function gets() {
            const tasks = await fetchFn()
            return tasks
        }
        // Object.entries(gets).map(e => e)
        gets()
    }, [])
    return { tasks }
}

function Tasks(props) {
    const { tasks } = useFetch(getTasks)
    return (
        <Section>
            <div className={styles['container']}>
                <ul>
                    {tasks.map(i => {
                        return <TaskItem item={i} key={i.id} />
                    })}
                </ul>
            </div>
        </Section>
    );
}

export default Tasks;