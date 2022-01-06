import { Atom } from "@ouikit/core";
import { Octopus } from "@ouikit/core/themes";
import { createElement } from "./createElement";
import { onUpdate } from "./update";
import { currentTheme, useTheme } from "./useTheme";

let firstRendering = true;

export function render(root: Element | null, ...atoms: Array<Atom>) {
    if (firstRendering) {
        firstRendering = false;

        if (!currentTheme) {
            useTheme(Octopus);
        }
    }

    if (!root) {
        throw new Error('Root is undefined');
    }

    atoms.forEach(atom => {
        const element = createElement(atom);
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