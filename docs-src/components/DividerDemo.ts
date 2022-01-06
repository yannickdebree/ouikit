import { Divider } from "@ouikit/core";
import { RouterControllerTools } from "@ouikit/router";

export function DividerDemo({ mount }: RouterControllerTools) {
    const divider = new Divider();

    mount(divider);
}