import { Atom, Box, Container, ContentContainer, Layout } from "@ouikit/core";
import { createElement } from "./createElement";
import { injectContentInRootElement } from "./injectContentInRootElement";

export function renderAtom(root: Element, atom: Atom) {
    const nodeElement = createElement(atom);

    if (atom instanceof ContentContainer) {
        atom.getContent().forEach(contentElement => {
            injectContentInRootElement(nodeElement, contentElement);
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
    }

    root.appendChild(nodeElement);
}