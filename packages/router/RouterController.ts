import { Atom } from "@ouikit/core";

export interface RouterControllerTools {
    mount(...atoms: Array<Atom>): void;
}

export type RouterController = (tools: RouterControllerTools) => void;