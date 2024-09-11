import React from 'react';

// css
import styles from './TaskItem.module.css';

function TaskItem({ item }) {
    return (
        <div className={styles['task']}>
            {item}
        </div>
    );
}

export default TaskItem;