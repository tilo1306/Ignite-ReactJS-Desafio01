import todoLogo from "../assets/Logo.svg";
import styles from "./header.module.css";
import { PlusCircle } from 'phosphor-react'
import { ChangeEvent, FormEvent, useState } from "react";

interface Props {
    onAddTask: (taskTitle: string) => void;
}

export function Header({ onAddTask }: Props) {
    const [title, setTitle] = useState("");

    function handleSubmit(event: FormEvent) {
        event.preventDefault();

        onAddTask(title);
        setTitle("");
    }

    function onChangeTitle(event: ChangeEvent<HTMLInputElement>) {
        setTitle(event.target.value);
    }

    return (
        <header className={styles.header}>
            <img src={todoLogo} />

            <form onSubmit={handleSubmit} className={styles.newTaskForm}>
                <input
                    placeholder="Adicione uma nova tarefa"
                    type="text"
                    value={title}
                    onChange={onChangeTitle}
                />
                <button>
                    Criar
                    <PlusCircle size={20} />
                </button>
            </form>
        </header>
    );
}