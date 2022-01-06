import { ListItem } from "./ListItem";
import { List } from "./List";

describe(List.name, () => {
    const list = new List();

    it('Could add item', () => {
        const item = new ListItem();
        expect(list.addItem(item)).toEqual(list);
        expect(list.getItems().length).toEqual(1);
    });

    it('Could remove item', () => {
        const item = list.getItems()[0];
        expect(list.removeItem(item)).toEqual(list);
        expect(list.getItems().length).toEqual(0);
    });

    it('Could set items manually', () => {
        expect(list.setItems([
            new ListItem(),
            new ListItem()
        ])).toEqual(list);
        expect(list.getItems().length).toEqual(2);
    });
})