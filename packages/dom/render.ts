import { Atom, TextInput } from "@ouikit/core";
import { Octopus } from "@ouikit/core/themes";
import { createElement } from "./createElement";
import { onUpdate } from "./update";
import { currentTheme, useTheme } from "./useTheme";

export let firstRendering = true;

export function render(root: Element | null, ...atoms: Array<Atom>) {
    if (firstRendering) {
        firstRendering = false;

        if (!currentTheme) {
            useTheme(Octopus);
        }
    }

    if (!root) {
        throw new Error('Root element is undefined');
    }

    atoms.forEach(atom => {
        const conditionFactory = atom.getConditionFactory();

        if (!!conditionFactory && !conditionFactory()) {
            const elseAtoms = atom.getElseAtoms();
            if (!elseAtoms) {
                throw new Error();
            }
            render(root, ...elseAtoms);
            return;
        }

        const element = createElement(atom);

        if (atom instanceof TextInput) {
            atom.on('keypress', (event) => {
                console.log((event?.target as HTMLInputElement).value);

                atom.setValue((event?.target as HTMLInputElement).value);
                console.log(atom);
            });
        }
        onUpdate(atom, element);

        root.appendChild(element);

        const eventsListeners = atom.getEventsListeners();

        Object.keys(eventsListeners).forEach(event => {
            eventsListeners[event].forEach(eventListenerCallback => {
                element.addEventListener(event, eventListenerCallback);
            })
        });

        atom.onChangesDetected(() => {
            onUpdate(atom, element);
        })
    });
}