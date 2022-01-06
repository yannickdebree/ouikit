import { Button } from "@ouikit/core";
import { RouterControllerTools } from "@ouikit/router";

export function ButtonDemo({ mount }: RouterControllerTools) {
    const button = new Button("I am a button");

    mount(button);
}