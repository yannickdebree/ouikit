import { List, ListItem } from "@ouikit/core";
import { RouterControllerTools } from "@ouikit/router";

export function ListDemo({ mount }: RouterControllerTools) {
    const list = new List();

    const itemA = new ListItem("I am an item of the list");
    list.addItem(itemA);

    const itemB = new ListItem("I am a second item of the list");
    list.addItem(itemB);

    mount(list);
}