import { Atom, ContentElement } from "@ouikit/core";
import { UnknowContentElementTypeError } from "./errors";
import { render } from "./render";
import { renderAtom } from "./renderAtom";

export function injectContentInRootElement(root: Element, contentElement: ContentElement) {
    if (contentElement === null || contentElement === undefined) return;

    if (typeof contentElement === "string") {
        root.appendChild(new Text(contentElement));
        return;
    }

    if (contentElement instanceof Atom) {
        renderAtom(root, contentElement);
        return;
    }

    if (!!contentElement['render'] && typeof contentElement['render'] === "function") {
        const modeculeContent = contentElement.render();
        render(root, ...modeculeContent);
        return;
    }

    throw new UnknowContentElementTypeError();
}
