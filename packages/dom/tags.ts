import { Atom, Box, Button, Container, Divider, Layout, List, ListItem, Text, TextInput } from "@ouikit/core";

const atomTagsDictionnary = {
    [Text.name]: "p",
    [Button.name]: "button",
    [List.name]: "ul",
    [ListItem.name]: "li",
    [Box.name]: "div",
    [Container.name]: "div",
    [Layout.name]: "div",
    [Divider.name]: "hr",
    [TextInput.name]: "input"
}

export function getTagFromAtom(atom: Atom) {
    return atomTagsDictionnary[atom.constructor.name]
}