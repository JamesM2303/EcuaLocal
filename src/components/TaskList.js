import React from 'react';
import TaskItem from './TaskItem';

function TaskList({tasks, toggleTask}) {
    return (
        <ul className="space-y-2">
            {tasks.map(task => (
                <TaskItem key={task.id} task={task} toggleTask={toggleTask}/>
            ))}
        </ul>
    );
}

export default TaskList;