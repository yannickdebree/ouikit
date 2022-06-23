import { Container, Molecule, Title } from "@ouikit/core";

export class ContainerDemo implements Molecule {
    render() {
        return [
            new Title('Container').setSize('m'),
            new Container(new Title("I am a title in a container")),
        ]
    }
}