import { List, ListItem, Molecule, Title } from "@ouikit/core";

export class ListDemo implements Molecule {
    render() {
        return [
            new Title('List').setSize('m'),
            new List(
                new ListItem("I am an item of the list"),
                new ListItem("I am a second item of the list")
            )
        ];
    }
}