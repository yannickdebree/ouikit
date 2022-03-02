import { TextInput } from ".";

describe(TextInput.name, () => {
    it('Could value be changed', () => {
        const textInput = new TextInput();
        expect(textInput.setValue('test')).toEqual(textInput);
        expect(textInput.getValue()).toEqual('test');
    });
})