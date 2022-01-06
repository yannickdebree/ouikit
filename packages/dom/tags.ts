import { Atom, Box, Button, Container, Divider, TextInput, Layout, List, ListItem } from "@ouikit/core";
import { Router } from "@ouikit/router";

const atomTagsDictionnary = {
    [Text.name]: "p",
    [Button.name]: "button",
    [List.name]: "ul",
    [ListItem.name]: "li",
    [Router.name]: "div",
    [Box.name]: "div",
    [Container.name]: "div",
    [Divider.name]: "hr",
    [Layout.name]: "div",
    [TextInput.name]: "input"
}

export function getTagFromAtom(atom: Atom) {
    return atomTagsDictionnary[atom.constructor.name]
}