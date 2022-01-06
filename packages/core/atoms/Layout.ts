import { ContentContainer } from ".";

type Align = 'row' | 'column'

export class Layout extends ContentContainer {
    private align: Align = 'row';

    getAlign() {
        return this.align;
    }

    setAlign(align: Align) {
        this.align = align;
        return this;
    }
}