import { Input } from "./Input";

describe(Input.name, () => {
    it('Could value be changed', () => {
        const input = new Input<number>();
        expect(input.setValue(0)).toEqual(input);
        expect(input.getValue()).toEqual(0);
    });
})