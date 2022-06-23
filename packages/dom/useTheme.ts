import { Theme } from "@ouikit/core";
import { MissingStyleSheetError } from "./errors";

export let currentTheme: Theme;

export function useTheme(theme: Theme) {
    const styleElement = document.createElement('style');
    document.head.appendChild(styleElement);

    const { fontFamily, primaryColor, lightTextColor, darkTextColor } = theme;

    const styleSheet = styleElement.sheet;

    if (!styleSheet) {
        throw new MissingStyleSheetError();
    }

    currentTheme = theme;

    styleSheet.insertRule(`
body{
    font-family: '${fontFamily}';
    color: ${darkTextColor};
    background-color: ${lightTextColor};
    font-size: 1rem;
    padding: 0;
    margin: 0;
}
`);

    styleSheet.insertRule(`
h1, h2, h3, h4, h5, h6, p, hr {
    margin-top: 0;
    margin-bottom: 1rem;
}
`);

    styleSheet.insertRule(`
.box {
    color: ${lightTextColor};
    background-color: ${primaryColor};
    padding: 0.5rem 1rem 0.5rem 1rem;
    margin-bottom: 1rem;
    border-radius: 0.25rem;
}
`);

    styleSheet.insertRule(`
.layout {
    display: flex;
    flex-direction: row;
    align-items: center;
}
`);

    styleSheet.insertRule(`
.container {
margin: auto;
padding: 0 1rem;
box-sizing: border-box;
}
`);

    styleSheet.insertRule(`
button {
    color: ${lightTextColor};
    background-color: ${primaryColor};
    padding: 0.5rem 1rem 0.5rem 1rem;
    border: none;
    border-radius: 0.25rem;
    cursor: pointer;
    font-size: 1rem;
}
`);

    styleSheet.insertRule(`
@media screen and (min-width: 1000px){
    .container {
        width: 1000px;
    }
}
`);

    styleSheet.insertRule(`
@media screen and (min-width: 800px) and (max-width: 999px){
    .container {
        width: 800px;
    }
}
`);

    styleSheet.insertRule(`
@media screen and (min-width: 600px) and (max-width: 799px){
    .container {
        width: 600px;
    }
}
`);

    styleSheet.insertRule(`
@media screen and (max-width: 599px){
    .container {
        width: 100%;
    }
}
`);
}