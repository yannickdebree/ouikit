import { Title } from "@ouikit/core";
import { setTitle } from "@ouikit/dom";
import { RouterControllerTools } from "@ouikit/router";
import { TITLE } from "../constants";

export function LandingPage({ mount }: RouterControllerTools) {
    setTitle('Home | ' + TITLE);

    mount(new Title('In progress'));
}