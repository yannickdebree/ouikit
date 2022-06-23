import { Atom, Box, Container, ContentContainer, Layout, List, TextInput } from "@ouikit/core";
import { render } from "..";

export function onUpdate(atom: Atom, element: HTMLElement) {
    if (atom instanceof ContentContainer) {
        // TODO: upgrade children delete
        element.innerHTML = "";
        atom.getContent().forEach(content => {
            if (content === null || content === undefined) return;
            if (content instanceof Atom) {
                render(element, content);
            } else if (typeof content === "string") {
                element.appendChild(new Text(content))
            } else {
                const contentRendered = content.render();
                render(element, ...contentRendered);
            }
        });
    }
    if (atom instanceof List) {
        // TODO: upgrade children delete
        element.innerHTML = "";
        render(element, ...atom.getItems());
    } if (atom instanceof Box) {
        element.classList.add('box')
    } if (atom instanceof Container) {
        element.classList.add('container')
    } if (atom instanceof Layout) {
        element.classList.add('layout')
    } if (atom instanceof TextInput) {
        if (!!atom.getValue()) {
            atom.setValue((element as HTMLInputElement).value)
        }
        (element as HTMLInputElement).value = atom.getValue() || '';
    }
}