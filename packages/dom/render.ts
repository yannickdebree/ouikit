import { Content } from "@ouikit/core";
import { OctopusTheme } from "@ouikit/core/themes";
import { MissingRootElementError } from "./errors";
import { currentTheme, useTheme } from "./theme/useTheme";

let firstRendering = true;

export function render(root: Element | null | undefined, ...content: Content) {
    if (!root) {
        throw new MissingRootElementError()
    }

    if (firstRendering) {
        firstRendering = false;

        useTheme(!!currentTheme ? currentTheme : new OctopusTheme());
    }

    content.forEach(contentElement => {
        if (contentElement === null || contentElement === undefined) return;

        if (typeof contentElement === "string") {
            root.appendChild(new Text(contentElement));
            return;
        }
    })


    // content.forEach(contentElement => {

    //     if (typeof contentElement === "string") {
    //         root.appendChild(new Text(contentElement));
    //         return;
    //     }

    //     if (!(contentElement instanceof Atom)) {
    //         render(root, ...contentElement.render());
    //         return;
    //     }

    //     const conditionFactory = contentElement.getConditionFactory();

    //     if (!!conditionFactory && !conditionFactory()) {
    //         const elseAtoms = contentElement.getElseAtoms();
    //         if (!elseAtoms) {
    //             throw new Error();
    //         }
    //         render(root, ...elseAtoms);
    //         return;
    //     }

    //     const nodeElement = createElement(contentElement);

    //     if (nodeElement instanceof TextInput) {
    //         nodeElement.on('keypress', (event) => {
    //             console.log((event?.target as HTMLInputElement).value);

    //             nodeElement.setValue((event?.target as HTMLInputElement).value);
    //             console.log(nodeElement);
    //         });
    //     }
    //     onUpdate(contentElement, nodeElement);

    //     root.appendChild(nodeElement);

    //     const eventsListeners = contentElement.getEventsListeners();

    //     Object.keys(eventsListeners).forEach(event => {
    //         eventsListeners[event].forEach(eventListenerCallback => {
    //             nodeElement.addEventListener(event, eventListenerCallback);
    //         })
    //     });

    //     contentElement.onChangesDetected(() => {
    //         onUpdate(contentElement, nodeElement);
    //     })
    // });
}