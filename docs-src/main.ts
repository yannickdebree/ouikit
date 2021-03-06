import { Container, Divider, Title } from "@ouikit/core";
import { render } from "@ouikit/dom";
import ComponentsSection from "./components";
import ExamplesSection from "./examples";

const container = new Container(
    new Title("Ouikit - Documentation"),
    new Divider(),
    new ComponentsSection(),
    new Divider(),
    new ExamplesSection()
);

render(document.querySelector('#root'), "Hello");
