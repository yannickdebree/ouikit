import { Molecule, TextInput, Title } from "@ouikit/core";

export class TextInputDemo implements Molecule {
    render() {
        return [
            new Title('Text Input').setSize('m'),
            new TextInput(),
        ]
    }
}