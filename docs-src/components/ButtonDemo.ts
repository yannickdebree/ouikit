import { Button, Molecule } from "@ouikit/core";

export class ButtonDemo implements Molecule {
    render() {
        return [
            new Button("I am a button"),
        ]
    }
}