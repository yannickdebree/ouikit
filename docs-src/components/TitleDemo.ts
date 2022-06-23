import { Molecule, Title } from "@ouikit/core";

export class TitleDemo implements Molecule {
    render() {
        return [
            new Title('Title').setSize('m'),
            new Title("I'm a title"),
            new Title("I'm a sub title").setSize('l'),
            new Title("I'm a sub sub title").setSize('m'),
            new Title("I'm a smaller title").setSize('sm'),
            new Title("I'm a smaller title").setSize('s'),
            new Title("I'm a smaller title").setSize('xs')
        ]
    }
}
