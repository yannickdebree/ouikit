import { Size } from '../Size';
import { ContentContainer } from './ContentContainer'

export class Title extends ContentContainer {
    private size: Size = 'xl';

    getSize(){
        return this.size;
    }

    setSize(size: Size){
        this.size = size;
        return this;
    }
}