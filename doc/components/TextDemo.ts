import { Text } from "@ouikit/core";
import { RouterControllerTools } from "@ouikit/router";

export function TextDemo({ mount }: RouterControllerTools) {
    const textA = new Text("I'm a paragraph !");
    const textB = new Text("I'm an other paragraph.");
    mount(textA, textB);
}