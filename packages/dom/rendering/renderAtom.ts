import { Atom, Box, Container, ContentContainer, Layout } from "@ouikit/core";
import { createElement } from "./createElement";
import { render } from "./render";
import { renderContentInRoot } from "./renderContentInRoot";

// function update(node: Element, atom: Atom) {
//     if(atom instanceof Button){
//         node.textContent = atom.getContent();
//     }
// }

export function renderAtom(root: Element, atom: Atom) {
    const nodeElement = createElement(atom);
    root.appendChild(nodeElement);

    if (atom instanceof ContentContainer) {
        atom.getContent().forEach((contentElement, position) => {
            renderContentInRoot(nodeElement, contentElement, position);
        });
    }

    if (atom instanceof Box) {
        nodeElement.classList.add('box')
    } if (atom instanceof Container) {
        nodeElement.classList.add('container')
    } if (atom instanceof Layout) {
        nodeElement.classList.add('layout')
        nodeElement.style.flexDirection = atom.getAlign();
        nodeElement.style.justifyContent = atom.getJustifyContent();
    };

    const eventsListeners = atom.getEventsListeners();
    Object.keys(eventsListeners).forEach(eventKey => {
        eventsListeners[eventKey].forEach(eventsListenerCallback => {
            nodeElement.addEventListener(eventKey, event => {
                eventsListenerCallback(event);
            });
        });
    });

    atom.onChangesDetected(() => {
        render(root, atom);
    });
}