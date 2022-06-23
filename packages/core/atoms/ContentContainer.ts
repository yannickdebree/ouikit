import { Content } from '../exported-interfaces';
import { Atom } from './Atom';

export class ContentContainer extends Atom {
    private content: Content;

    constructor(...content: Content) {
        super()
        this.content = content;
    }

    getContent() {
        return this.content;
    }

    setContent(...content: Content) {
        this.content = content;
        this.detectChanges();
        return this;
    }
}