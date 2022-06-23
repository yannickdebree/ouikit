import { Atom } from "./atoms";
import { Color } from "./Color";

export type ContentElement = string | Atom | Molecule | undefined | null;
export type Content = Array<ContentElement>

export interface Molecule {
    render(): Content;
}

export interface Theme {
    readonly name: string;
    readonly version: string;
    readonly fontFamily: string;
    readonly primaryColor: Color;
    readonly lightTextColor: Color;
    readonly darkTextColor: Color,
}