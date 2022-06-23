import { List, ListItem, Molecule, Title } from "@ouikit/core";

export class ListDemo implements Molecule {
    render() {
        const list = new List();

        const itemA = new ListItem("I am an item of the list");
        list.addItem(itemA);

        const itemB = new ListItem("I am a second item of the list");
        list.addItem(itemB);

        return [
            new Title('List').setSize('m'),
            list
        ];
    }
}