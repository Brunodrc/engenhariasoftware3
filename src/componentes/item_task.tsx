import {
    ChangeEvent, useCallback, useEffect,
    useMemo, useRef, useState
} from "react";

import { Task } from "../App";

interface TaskItemProps {
    task: Task
    onChangeTask: (task: Task) => void
    onDeleteTask: (taskId: number) => void
}

export function TaskItem({ task, onChangeTask, onDeleteTask }: TaskItemProps) {
    const [taskText, setTaskText] = useState(task.text)
    const [isEditing, setIsEditing] = useState(false)

    //useCallback - serve para guardar uma função na memoria?
    const handlerDoneChange = useCallback(() => {
        () => {
            task.done = !task.done
            onChangeTask(task)
        }
    }, [task])

    const handleTextChange = (event: ChangeEvent<HTMLInputElement>) => {
        setTaskText(event.target.value)
    }

    const handleEditSaveClick = () => {
        if (isEditing) {
            onChangeTask({ ...task, text: taskText })
            setIsEditing(false)
        } else {
            setIsEditing(true)
        }
    }

    // useMemo - salva na memoria valores entre renderizações/sincronizações
    //evita de renderizar uma função toda vez q a pagina for renderizada
    const buttonLabel = useMemo(() => isEditing ? "Salvar" : "Editar", [isEditing])

    //useRef é semelhante ao useState, porém não muda
    /* usado geralmente para ficar conectado a algum
    HTMLElement e assim ler ou alterar algum atributo/ estado
    neste exemplo é o foco no input
    */

    const inputTaskTextRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        isEditing && inputTaskTextRef.current!.focus()
    }, [isEditing])

    return (
        <li key={task.id}>
            <input type="checkbox" checked={task.done} onChange={handlerDoneChange} />

            {
                isEditing ?
                    (
                        <input
                            ref={inputTaskTextRef}
                            value={taskText}
                            onChange={handleTextChange}
                        />
                    )
                    :
                    (<span>{task.text}</span>)
            }
            <button onClick={handleEditSaveClick}>{buttonLabel}</button>
            <button onClick={() => onDeleteTask(task.id)}>Deletar</button>
        </li>
    )

}