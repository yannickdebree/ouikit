import { Color } from "../Color";

export interface Theme {
    name: string;
    version: string;
    fontFamily: string;
    primaryColor: Color;
    lightTextColor: Color;
    darkTextColor: Color,
}