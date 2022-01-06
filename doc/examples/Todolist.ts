import { Button, Layout, List, ListItem, ref, TextInput } from "@ouikit/core";
import { RouterControllerTools } from "@ouikit/router";

type Task = { id: number, content: string };

export function Todolist({ mount }: RouterControllerTools) {
    const list = new List();

    const [getState, setState] = ref({
        tasks: new Array<Task>(),
    }, {
        onChange({ tasks }) {
            list.setItems(tasks.map((task) => {
                const item = new ListItem(task.content);
                item.on('click', () => setState({ tasks: tasks.filter(t => t.id !== task.id) }))
                return item;
            }))
        }
    });

    const createTask = () => {
        const id = getState().tasks.length;
        setState({ tasks: getState().tasks.concat([{ id, content: "Nouvelle tâche " + id }]) });
    }

    const button = new Button('Create a new task').on('click', createTask);

    const input = new TextInput().on('keypress', (event) => {
        if (event?.code === "Enter") {
            createTask();
            input.setValue('');
        }

    });
    const header = new Layout(
        input, button
    )

    mount(header, list)
}