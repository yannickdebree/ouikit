import { Molecule, Text, Title } from "@ouikit/core";

export class TextDemo implements Molecule {
    render() {
        return [
            new Title('Text').setSize('m'),
            new Text("I'm a paragraph !"),
            new Text("I'm an other paragraph.")
        ]
    }
}