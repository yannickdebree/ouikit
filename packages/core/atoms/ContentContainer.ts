import { Atom } from './Atom';
import { Content } from '../Content';

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