import { ContentContainer } from ".";

type Align = 'row' | 'column';
type JustifyContent = 'space-between' | 'normal';

export class Layout extends ContentContainer {
    private align: Align = 'row';
    private justifyContent: JustifyContent = 'normal';

    getAlign() {
        return this.align;
    }

    setAlign(align: Align) {
        this.align = align;
        return this;
    }

    getJustifyContent() {
        return this.justifyContent;
    }

    setJustifyContent(justifyContent: JustifyContent) {
        this.justifyContent = justifyContent;
        return this;
    }
}