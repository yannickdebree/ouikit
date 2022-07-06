import { Content } from "@ouikit/core";
import { OctopusTheme } from "@ouikit/core/themes";
import { MissingRootElementError } from "../errors";
import { currentTheme, useTheme } from "../useTheme";

let firstRendering = true;

requestIdleCallback((e) => {
    console.log(e);
})

export function render(root: Element | null | undefined, ...content: Content) {
    if (!root) {
        throw new MissingRootElementError()
    }

    if (firstRendering) {
        firstRendering = false;

        useTheme(!!currentTheme ? currentTheme : new OctopusTheme());
    }

    // content.forEach((contentElement, position) => {
    //     if (typeof contentElement === "string") {
    //         if (!root.childNodes[position] || !(root.childNodes[position] instanceof Text)) {
    //             const a = [...root.childNodes];
    //             a[position] = (new Text(contentElement));
    //         }

    //         root.childNodes[position].textContent = contentElement;
    //         return;
    //     }
    // });
}