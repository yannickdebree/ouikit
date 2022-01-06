import { Atom, Box, Container, ContentContainer, Layout, List, TextInput } from "@ouikit/core";
import { Router, RouterControllerTools } from "@ouikit/router";
import { render } from ".";

export function onUpdate(atom: Atom, element: HTMLElement) {
    if (atom instanceof ContentContainer) {
        // TODO: upgrade children delete
        element.innerHTML = "";
        atom.getContent().forEach(content => {
            if (content === null || content === undefined) return;
            if (content instanceof Atom) {
                render(element, content);
            } else {
                element.appendChild(new Text(content))
            }
        });
    }
    if (atom instanceof List) {
        // TODO: upgrade children delete
        element.innerHTML = "";
        render(element, ...atom.getItems());
    } if (atom instanceof Router) {
        element.innerHTML = "";
        const options: RouterControllerTools = {
            mount(...atoms) {
                render(element, ...atoms);
            }
        };

        const activeRouterController = atom.getActiveRouterController()

        if (!!activeRouterController) {
            activeRouterController(options);
        }
    } if (atom instanceof Box) {
        element.classList.add('box')
    } if (atom instanceof Container) {
        element.classList.add('container')
    } if (atom instanceof Layout) {
        element.classList.add('layout')
    } if (atom instanceof TextInput) {

    }
}