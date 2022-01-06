import { Layout } from "./Layout";

describe(Layout.name, () => {
    it('Could align be changed', () => {
        const layout = new Layout();
        expect(layout.setAlign('column')).toEqual(layout);
        expect(layout.getAlign()).toEqual('column');
    });
})