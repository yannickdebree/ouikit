import { Molecule, Title } from "@ouikit/core";
import { BoxDemo } from "./BoxDemo";
import { ButtonDemo } from "./ButtonDemo";
import { ContainerDemo } from "./ContainerDemo";
import { DividerDemo } from "./DividerDemo";
import { LayoutDemo } from "./LayoutDemo";
import { ListDemo } from "./ListDemo";
import { TextDemo } from "./TextDemo";
import { TextInputDemo } from "./TextInputDemo";
import { TitleDemo } from "./TitleDemo";

class ComponentsSection implements Molecule {
    render() {
        return [
            new Title("Components").setSize('l'),
            new TextInputDemo(),
            new BoxDemo(),
            new ButtonDemo(),
            new ContainerDemo(),
            new DividerDemo(),
            new LayoutDemo(),
            new ListDemo(),
            new TextDemo(),
            new TitleDemo(),
        ]
    }
}

export default ComponentsSection;