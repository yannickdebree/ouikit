import { Color } from "../Color";

export interface Theme {
    readonly name: string;
    readonly version: string;
    readonly fontFamily: string;
    readonly primaryColor: Color;
    readonly lightTextColor: Color;
    readonly darkTextColor: Color,
}