import { Atom, Box, Container, Content, ContentContainer, ContentElement, Layout } from "@ouikit/core";
import { OctopusTheme } from "@ouikit/core/themes";
import { createElement } from "./createElement";
import { MissingRootElementError } from "./errors";
import { currentTheme, useTheme } from "./useTheme";

let firstRendering = true;

function injectContentInRootElement(root: Element, contentElement: ContentElement) {
    if (contentElement === null || contentElement === undefined) return;

    if (typeof contentElement === "string") {
        root.appendChild(new Text(contentElement));
        return;
    }

    if (contentElement instanceof Atom) {
        const nodeElement = createElement(contentElement);

        if (contentElement instanceof ContentContainer) {
            contentElement.getContent().forEach(_contentElement => {
                injectContentInRootElement(nodeElement, _contentElement);
            });
        }

        if (contentElement instanceof Box) {
            nodeElement.classList.add('box')
        } if (contentElement instanceof Container) {
            nodeElement.classList.add('container')
        } if (contentElement instanceof Layout) {
            nodeElement.classList.add('layout')
        }

        root.appendChild(nodeElement);
        return;
    }

    const modeculeContent = contentElement.render();
    render(root, ...modeculeContent);
}

export function render(root: Element | null | undefined, ...content: Content) {
    if (!root) {
        throw new MissingRootElementError()
    }

    if (firstRendering) {
        firstRendering = false;

        useTheme(!!currentTheme ? currentTheme : new OctopusTheme());
    }

    content.forEach(contentElement => {
        injectContentInRootElement(root, contentElement);
    });
}