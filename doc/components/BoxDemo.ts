import { Box, Divider, Text, Title } from "@ouikit/core";
import { RouterControllerTools } from "@ouikit/router";

export function BoxDemo({ mount }: RouterControllerTools) {
    const boxA = new Box("I am a text in a box");
    const boxB = new Box(new Title("I am a title in a box"), new Divider(), new Text("I'm a text in a box"));

    mount(boxA, boxB);
}