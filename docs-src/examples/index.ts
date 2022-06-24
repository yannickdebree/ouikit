import { Molecule, Title } from "@ouikit/core";
import { CounterExample } from "./CounterExample";

class ExamplesSection implements Molecule {
    render() {
        return [
            new Title('Examples').setSize("l"),
            new CounterExample(),
            // new Todolist()
        ]
    }
}

export default ExamplesSection;