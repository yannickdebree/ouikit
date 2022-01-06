import { Title } from "@ouikit/core";
import { RouterControllerTools } from "@ouikit/router";

export function TitleDemo({ mount }: RouterControllerTools) {
    const titleA = new Title("I'm a title");
    const titleB = new Title("I'm a sub title").setSize('l');
    const titleC = new Title("I'm a sub sub title").setSize('m');
    const titleD = new Title("I'm a smaller title").setSize('sm');
    const titleE = new Title("I'm a smaller title").setSize('s');
    const titleF = new Title("I'm a smaller title").setSize('xs');

    mount(titleA, titleB, titleC, titleD, titleE, titleF);
}