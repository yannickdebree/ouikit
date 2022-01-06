import { Atom } from "@ouikit/core";
import { Octopus } from "@ouikit/core/themes";
import { currentTheme, useTheme } from "./useTheme";
import { createElement } from "./create";
import { onUpdate } from "./update";

let firstRendering = true;

export function render(root: Element | null, ...atoms: Array<Atom>) {
    if (firstRendering) {
        firstRendering = false;
        
        if(!currentTheme){
            useTheme(Octopus);
        }
    }

    if (!root) {
        throw new Error('Root is undefined');
    }

    atoms.forEach(atom => {
        const element = createElement(atom);

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