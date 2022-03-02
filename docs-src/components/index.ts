import { Title } from "@ouikit/core";
import { BoxDemo } from "./BoxDemo";
import { ButtonDemo } from "./ButtonDemo";
import { ContainerDemo } from "./ContainerDemo";
import { DividerDemo } from "./DividerDemo";
import { ListDemo } from "./ListDemo";
import { TextDemo } from "./TextDemo";
import { TitleDemo } from "./TitleDemo";

export const Components = [
    new Title("Components").setSize('l'),
    new Title('Box').setSize('m'),
    ...BoxDemo,
    new Title('Title').setSize('m'),
    ...TitleDemo,
    new Title('Text').setSize('m'),
    ...TextDemo,
    new Title('Container').setSize('m'),
    ...ContainerDemo,
    new Title('Divider').setSize('m'),
    ...DividerDemo,
    new Title('Button').setSize('m'),
    ...ButtonDemo,
    new Title('List').setSize('m'),
    ...ListDemo()
]