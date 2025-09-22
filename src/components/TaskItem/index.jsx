import { useState } from 'react';
import styles from './TaskItem.module.css';

export default function TaskItem({
    task,
    toggleTask,
    deleteTask,
    editTask,
    isCompletedList = false,
}){
    const [isEditing, setIsEditing] = useState(false);
    const [newText, setNewText] = useState(task.text);

    const handleEdit = () => {
        if (isCompletedList) return;
        if (isEditing && newText.trim()){
            editTask(task.id, newText);
        };

        setIsEditing(!isEditing);
    };

    return (
        <li className={styles.item}>
            {isEditing ? (
            <input
                className={styles.input}
                value={newText}
                onChange={e => setNewText(e.target.value)}
            />
            ) : (
                <span
                    className={`${styles.text} ${task.completed ? styles.completed : ""} ${isCompletedList ? styles.completedHighlight : ""}`}
                    onClick={() => !isCompletedList && toggleTask(task.id)}
                >
                    {task.text}
                </span>
            )}

            <div className={styles.actions}>
                {!isCompletedList && (
                    <button onClick={handleEdit} className={styles.edit}>
                        {isEditing ? "💾" : "✏️"}
                    </button>
                )}
                <button
                    onClick={() => deleteTask(task.id)}
                    className={styles.delete}
                >
                    {isCompletedList ? "↩️" : "✕"}
                </button>
            </div>
        </li>
    )
}