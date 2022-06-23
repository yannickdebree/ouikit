import { Atom, Content, TextInput } from "@ouikit/core";
import { OctopusTheme } from "@ouikit/core/themes";
import { createElement } from "./createElement";
import { onUpdate } from "./update";
import { currentTheme, useTheme } from "./useTheme";

export let firstRendering = true;

export function render(root: Element | null, ...content: Content) {
    if (firstRendering) {
        firstRendering = false;

        if (!currentTheme) {
            useTheme(new OctopusTheme());
        }
    }

    if (!root) {
        throw new Error('Root element is undefined');
    }

    content.forEach(contentElement => {
        if (contentElement === null || contentElement === undefined) return;

        if (typeof contentElement === "string") {
            root.appendChild(new Text(contentElement));
            return;
        }

        if (!(contentElement instanceof Atom)) {
            render(root, ...contentElement.render());
            return;
        }

        const conditionFactory = contentElement.getConditionFactory();

        if (!!conditionFactory && !conditionFactory()) {
            const elseAtoms = contentElement.getElseAtoms();
            if (!elseAtoms) {
                throw new Error();
            }
            render(root, ...elseAtoms);
            return;
        }

        const nodeElement = createElement(contentElement);

        if (nodeElement instanceof TextInput) {
            nodeElement.on('keypress', (event) => {
                console.log((event?.target as HTMLInputElement).value);

                nodeElement.setValue((event?.target as HTMLInputElement).value);
                console.log(nodeElement);
            });
        }
        onUpdate(contentElement, nodeElement);

        root.appendChild(nodeElement);

        const eventsListeners = contentElement.getEventsListeners();

        Object.keys(eventsListeners).forEach(event => {
            eventsListeners[event].forEach(eventListenerCallback => {
                nodeElement.addEventListener(event, eventListenerCallback);
            })
        });

        contentElement.onChangesDetected(() => {
            onUpdate(contentElement, nodeElement);
        })
    });
}