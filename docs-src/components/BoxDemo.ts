import { Box, Divider, Molecule, Text, Title } from "@ouikit/core";

export class BoxDemo implements Molecule {
    render() {
        return [
            new Title('Box').setSize('m'),
            new Box("I am a text in a box"),
            new Box(new Title("I am a title in a box"), new Divider(), new Text("I'm a text in a box"))
        ]
    }
}
