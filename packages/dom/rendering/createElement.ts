import { Atom } from "@ouikit/core";
import { UnknowTagError } from "../errors";
import { getTagFromAtom } from "./tags";

export function createElement(atom: Atom) {
    const tag = getTagFromAtom(atom)

    if (!tag) {
        throw new UnknowTagError();
    }

    return document.createElement(tag);
}