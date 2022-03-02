import { Molecule, Title } from "@ouikit/core";
import { Counter } from "./Counter";
import { Todolist } from "./Todolist";

export class Examples implements Molecule {
    render() {
        return [
            new Title('Examples').setSize("l"),
            new Title('Counter').setSize('m'),
            new Counter(),
            new Title('Todolist').setSize('m'),
            new Todolist()
        ]
    }

}