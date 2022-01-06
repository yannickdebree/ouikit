import { List, ListItem } from "@ouikit/core";
import { setTitle } from "@ouikit/dom";
import { Router, RouterControllerTools } from "@ouikit/router";
import { TITLE } from "../constants";
import { BoxDemo } from "./BoxDemo";
import { ButtonDemo } from "./ButtonDemo";
import { ContainerDemo } from "./ContainerDemo";
import { DividerDemo } from "./DividerDemo";
import { ListDemo } from "./ListDemo";
import { Routes } from "./Routes";
import { TextDemo } from "./TextDemo";
import { TitleDemo } from "./TitleDemo";

export function Components({ mount }: RouterControllerTools) {
    setTitle('Components | ' + TITLE)

    const menu = new List()
        .addItem(new ListItem('Box').on('click', () => {
            router.navigate(Routes.box)
        }))
        .addItem(new ListItem('Title').on('click', () => {
            router.navigate(Routes.title)
        }))
        .addItem(new ListItem('Text').on('click', () => {
            router.navigate(Routes.text)
        }))
        .addItem(new ListItem('Container').on('click', () => {
            router.navigate(Routes.container)
        }))
        .addItem(new ListItem('Divider').on('click', () => {
            router.navigate(Routes.divider)
        }))
        .addItem(new ListItem('Button').on('click', () => {
            router.navigate(Routes.button)
        }))
        .addItem(new ListItem('List').on('click', () => {
            router.navigate(Routes.list)
        }));

    const router = new Router({
        routes: {
            [Routes.box]: BoxDemo,
            [Routes.title]: TitleDemo,
            [Routes.text]: TextDemo,
            [Routes.container]: ContainerDemo,
            [Routes.divider]: DividerDemo,
            [Routes.button]: ButtonDemo,
            [Routes.list]: ListDemo
        }
    })

    mount(menu, router);
}