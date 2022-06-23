import { Atom, Title } from "@ouikit/core";
import { UnknowTagError } from "./errors";
import { getTagFromAtom } from "./tags";

export function createElement(atom: Atom) {
    let tag: string;

    if (atom instanceof Title) {
        switch (atom.getSize()) {
            case 'xs':
                tag = 'h6';
                break;
            case "s":
                tag = 'h5';
                break;
            case "sm":
                tag = 'h4';
                break;
            case "m":
                tag = 'h3';
                break;
            case 'l':
                tag = 'h2';
                break;
            case 'xl':
            default:
                tag = 'h1';
                break;
        }
    } else {
        tag = getTagFromAtom(atom)
    }

    if (!tag) {
        throw new UnknowTagError();
    }

    const element = document.createElement(tag);

    return element;
}