import { ContentContainer } from "./ContentContainer";
import { ListItem } from "./ListItem";

export class List extends ContentContainer {
    private items = new Array<ListItem>();

    constructor(...items: Array<ListItem>) {
        super(...items);
        this.items = items;
    }

    getItems() {
        return this.items;
    }

    setItems(items: ListItem[]) {
        this.items = items;
        this.detectChanges();
        return this;
    }

    addItem(item: ListItem) {
        this.items.push(item);
        this.detectChanges();
        return this;
    }

    removeItem(item: ListItem) {
        this.items = this.items.filter(i => i !== item);
        this.detectChanges();
        return this;
    }
}