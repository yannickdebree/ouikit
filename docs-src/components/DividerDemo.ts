import { Divider, Molecule, Title } from "@ouikit/core";

export class DividerDemo implements Molecule {
    render() {
        return [
            new Title('Divider').setSize('m'),
            new Divider()
        ]
    }
}