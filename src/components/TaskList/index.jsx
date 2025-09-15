import TaskItem from '../TaskItem';
import styles from './TaskList.module.css';

export default function TaskList({
  tasks,
  toggleTask,
  deleteTask,
  editTask,
  isCompletedList = false, 
}) {
  // Verificar se tem uma tarefa
  if (tasks.length === 0) {
    return (
      <p className={styles.empty}>
        {isCompletedList ? 'Nenhuma tarefa concluída ainda.' : 'Nenhuma tarefa pendente.'}
      </p>
    )
  };

  return (
    <ul className={styles.list}>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          toggleTask={toggleTask}
          deleteTask={deleteTask}
          editTask={editTask}
          isCompletedList={isCompletedList} 
        />
      ))}
    </ul>
  )
};