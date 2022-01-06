import { Atom, ListItem } from "..";

export class List extends Atom {
    private items = new Array<ListItem>();

    getItems(){
        return this.items;
    }

    setItems(items: ListItem[]){
        this.items = items;
        this.detectChanges();
        return this;
    }

    addItem(item: ListItem){
        this.items.push(item);
        this.detectChanges();
        return this;
    }

    removeItem(item: ListItem){
        this.items = this.items.filter(i => i !== item);
        this.detectChanges();
        return this;
    }
}