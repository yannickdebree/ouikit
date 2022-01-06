import { Title } from "./Title";

describe(Title.name, () => {
    it('Could size be changed', () => {
        const title = new Title();
        expect(title.setSize('xs')).toEqual(title);
        expect(title.getSize()).toEqual('xs');
    });
})