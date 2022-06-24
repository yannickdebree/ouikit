import { Button, Molecule, ref, Title } from "@ouikit/core";

export class CounterExample implements Molecule {
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

        return [
            new Title('Counter').setSize('m'),
            button
        ];
    }
}