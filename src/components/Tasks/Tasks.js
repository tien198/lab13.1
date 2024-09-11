import React from 'react'
import Section from '../UI/Section';
import TaskItem from './TaskItem';
// data
import { getTasks } from '../../ultilities/httpRequest';
import { useFetch } from '../../hooks/useFetch';

// css
import styles from './Tasks.module.css'

function Tasks() {
    const { tasks, isLoading, error } = useFetch(getTasks, [])
    if (error)
        return (
            <Section>
                <TaskItem item={error.message} />
            </Section>
        )
    return (
        <Section>
            <div className={styles['container']}>
                <ul>
                    {isLoading && <TaskItem item='Data is loading ...' />}
                    {!isLoading && tasks.length <= 0 && <TaskItem item='No Tasks found! Start adding some!' />}
                    {!isLoading && tasks.map(i => {
                        return <li key={i.id}>
                            <TaskItem item={i.value} />
                        </li>
                    })}
                </ul>
            </div>
        </Section>
    );
}

export default Tasks;