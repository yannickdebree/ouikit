import { Container, Title } from "@ouikit/core";
import { RouterControllerTools } from "@ouikit/router";

export function ContainerDemo({ mount }: RouterControllerTools) {
    const box = new Container(new Title("I am a title in a container"));

    mount(box);
}