import { Atom, ContentElement } from "@ouikit/core";
import { UnknowContentElementTypeError } from "../errors";
import { render } from "./render";
import { renderAtom } from "./renderAtom";

export function renderContentInRoot(root: Element, contentElement: ContentElement, position: number) {
    if (contentElement === null || contentElement === undefined) return;

    if (typeof contentElement === "string") {
        if (!root.childNodes[position] || !(root.childNodes[position] instanceof Text)) {
            root.appendChild(new Text(contentElement));
        }

        root.childNodes[position].textContent = contentElement;
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
