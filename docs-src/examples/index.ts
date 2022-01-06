import { List, ListItem } from "@ouikit/core";
import { setTitle } from "@ouikit/dom";
import { RouterControllerTools, Router } from "@ouikit/router";
import { TITLE } from "../constants";
import { Counter } from "./Counter";
import { Routes } from "./Routes";
import { Todolist } from "./Todolist";

export function Examples({ mount }: RouterControllerTools) {
    setTitle('Examples | ' + TITLE)

    const menu = new List();

    const router = new Router({
        routes: {
            [Routes.counter]: Counter,
            [Routes.todolist]: Todolist
        }
    });

    const counter = new ListItem('Counter').on('click', () => {
        router.navigate(Routes.counter)
    })
    menu.addItem(counter);

    const todolist = new ListItem('Todolist').on('click', () => {
        router.navigate(Routes.todolist)
    })
    menu.addItem(todolist);

    mount(menu, router);
}