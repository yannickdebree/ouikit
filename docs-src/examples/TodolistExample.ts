import { Button, Layout, List, ListItem, Molecule, ref, Text, TextInput, Title } from "@ouikit/core";

type Task = { id: number, content: string };

export class TodolistExample implements Molecule {
    render() {
        const list = new List().if(() => getTasks().length > 0).else(new Text('No tasks for the moment.'));

        setTimeout(() => {
            setTasks(tasks => tasks.concat([{ id: tasks.length, content: "Test" }]))
        }, 2000)

        const [getTasks, setTasks] = ref(new Array<Task>(), {
            onChange(tasks) {
                list.setItems(tasks.map((task) => {
                    const item = new ListItem(task.content);
                    item.on('click', () => setTasks(tasks.filter(t => t.id !== task.id)))
                    return item;
                }));
            }
        });


        const createTask = (content: string) => {
            setTasks(tasks => tasks.concat([{ id: tasks.length, content }]));
        }

        const input = new TextInput().on('keypress', (event) => {
            const value = input.getValue();
            console.log(value);

            if (event?.code === "Enter" && !!value) {
                createTask(value);
                input.setValue('');
            }
        });

        const button = new Button('Create a new task').on('click', () => {
            const value = input.getValue();
            if (!!value) {
                createTask(value);
            }
        });

        const header = new Layout(
            input, button
        );

        return [
            new Title('Todolist').setSize('m'),
            header, list
        ]
    }
}