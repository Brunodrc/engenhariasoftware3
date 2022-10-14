import { Task } from "../App";
import { TaskItem } from "./item_task";

interface TaskListProps{
    tasks: Task[]
    onchangeTask: (task: Task) => void
    onDeleteTask: (taskId: number) => void
}

export function TaskList({tasks, onchangeTask, onDeleteTask}: TaskListProps){

    return (
        <>
            <ul>
                {tasks.map(task =>(
                    <TaskItem key={task.id}
                        task={task}
                        onChangeTask={onchangeTask}
                        onDeleteTask={onDeleteTask}
                    />
                ))}
            </ul>
        </>
    )
}