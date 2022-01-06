import { Input } from "./Input";

describe(Input.name, () => {
    it('Could value be changed', () => {
        const input = new Input<string>();
        expect(input.setValue('test')).toEqual(input);
        expect(input.getValue()).toEqual('test');
    });
})