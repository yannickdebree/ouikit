import { Molecule, Title } from "@ouikit/core";
import { BoxDemo } from "./BoxDemo";
import { ButtonDemo } from "./ButtonDemo";
import { ContainerDemo } from "./ContainerDemo";
import { DividerDemo } from "./DividerDemo";
import { ListDemo } from "./ListDemo";
import { TextDemo } from "./TextDemo";
import { TitleDemo } from "./TitleDemo";

class ComponentsSection implements Molecule {
    render() {
        return [
            new Title("Components").setSize('l'),
            // Text input
            new BoxDemo(),
            new ButtonDemo(),
            new ContainerDemo(),
            // Content container
            new DividerDemo(),
            // Layout
            new ListDemo(),
            new TextDemo(),
            new TitleDemo(),
        ]
    }
}

export default ComponentsSection;