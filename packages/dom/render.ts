import { Content } from "@ouikit/core";
import { OctopusTheme } from "@ouikit/core/themes";
import { MissingRootElementError } from "./errors";
import { injectContentInRootElement } from "./injectContentInRootElement";
import { currentTheme, useTheme } from "./useTheme";

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
        injectContentInRootElement(root, contentElement);
    });
}