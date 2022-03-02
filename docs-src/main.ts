import { Container, Divider, Title } from "@ouikit/core";
import { render } from "@ouikit/dom";
import { Components } from "./components";
import { Examples } from "./examples";

const container = new Container(
    new Title("Ouikit - Documentation"),
    new Divider(),
    ...Components,
    new Divider(),
    new Examples()
)

render(document.querySelector('#root'), container);
