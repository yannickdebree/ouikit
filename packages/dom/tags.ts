import { Atom, Box, Button, Container, Divider, Layout, List, ListItem, Text, TextInput, Title } from "@ouikit/core";

const atomTagsDictionnary = {
    [TextInput.name]: "input",
    [Box.name]: "div",
    [Button.name]: "button",
    [Container.name]: "div",
    [Divider.name]: "hr",
    [Layout.name]: "div",
    [List.name]: "ul",
    [ListItem.name]: "li",
    [Text.name]: "p",
}

export function getTagFromAtom(atom: Atom) {
    if (atom instanceof Title) {
        switch (atom.getSize()) {
            case 'xs':
                return 'h6';
            case "s":
                return 'h5';
            case "sm":
                return 'h4';
            case "m":
                return 'h3';
            case 'l':
                return 'h2';
            case 'xl':
            default:
                return 'h1';
        }
    }

    return atomTagsDictionnary[atom.constructor.name]
}