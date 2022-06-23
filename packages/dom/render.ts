import { Atom, Content, ContentContainer } from "@ouikit/core";
import { OctopusTheme } from "@ouikit/core/themes";
import { createElement } from "./createElement";
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

        if (contentElement instanceof Atom) {
            const nodeElement = createElement(contentElement);

            if (contentElement instanceof ContentContainer) {
                contentElement.getContent().forEach(content => {
                    if (typeof content === "string") {
                        nodeElement.appendChild(new Text(content))
                    }
                });
            }

            root.appendChild(nodeElement);
            return;
        }

        const modeculeContent = contentElement.render();
        render(root, ...modeculeContent);
    });
}