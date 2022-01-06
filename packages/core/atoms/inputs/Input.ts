import { Atom } from "../Atom";

export class Input<T> extends Atom {
    private value?: T;

    public getValue() {
        return this.value;
    }

    public setValue(value: T) {
        this.value = value;
        this.detectChanges();
        return this;
    }
}