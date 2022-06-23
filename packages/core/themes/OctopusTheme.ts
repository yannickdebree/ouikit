import { Theme } from "../exported-interfaces";

export class OctopusTheme implements Theme {
    readonly name = 'Octopus';
    readonly version = '0.0.0';
    readonly fontFamily = 'Arial';
    readonly primaryColor = '#2e2ed6';
    readonly darkTextColor = "#313131";
    readonly lightTextColor = "#fdfdfd";
}