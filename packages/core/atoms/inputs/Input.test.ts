import { Input } from "./Input";

describe(Input.name, () => {
    it('Could value be changed', () => {
        const input = new Input<string>();
        const setterReturn = input.setValue('test');
        expect(input.getValue()).toEqual('test');
        expect(setterReturn).toEqual(input);
    });
})