import { Button, Molecule, Title } from "@ouikit/core";

export class ButtonDemo implements Molecule {
    render() {
        return [
            new Title('Button').setSize('m'),
            new Button("I am a button"),
        ]
    }
}