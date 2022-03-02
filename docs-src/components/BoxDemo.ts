import { Box, Divider, Text, Title } from "@ouikit/core";

export const BoxDemo = [
    new Box("I am a text in a box"),
    new Box(new Title("I am a title in a box"), new Divider(), new Text("I'm a text in a box"))
]