import { Button, Molecule, ref } from "@ouikit/core";

export class Counter implements Molecule {
    render() {
        const button = new Button();

        const [, setCounter] = ref(0, {
            applyOnChangeCallbackAfterInit: true,
            onChange: (count) => {
                button.setContent(`Click to increment : +${count}`);
            },
        });

        button.on('click', () => {
            setCounter(counter => counter + 1);
        });

        return [button];
    }
}