import { Button, ref } from "@ouikit/core";
import { RouterControllerTools } from "@ouikit/router";

export function Counter({ mount }: RouterControllerTools) {
    const button = new Button();

    const [getState, setState] = ref({ count: 0 }, {
        applyOnChangeCallbackAfterInit: true,
        onChange: ({ count }) => {
            button.setContent(`Click to increment : +${count}`);
        },
    });

    button.on('click', () => {
        setState({ count: getState().count + 1 });
    });

    mount(button);
}