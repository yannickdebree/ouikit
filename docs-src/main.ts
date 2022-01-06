import { Box, Button, Container, Layout, Title } from "@ouikit/core";
import { render, setTitle } from "@ouikit/dom";
import { Router } from "@ouikit/router";
import { Components } from "./components";
import { TITLE } from "./constants";
import { Examples } from "./examples";
import { LandingPage } from "./landing-page";
import { Routes } from "./Routes";

const router = new Router({
    routes: {
        [Routes.landingPage]: LandingPage,
        [Routes.components]: Components,
        [Routes.examples]: Examples
    }
});

const navbar =
    new Box(
        new Container(
            new Layout(
                new Title('Documentation').on('click', () => {
                    router.navigate(Routes.landingPage)
                }),
                new Layout(
                    new Button('Components').on('click', () => {
                        router.navigate(Routes.components)
                    }),
                    new Button('Examples').on('click', () => {
                        setTitle('Examples | ' + TITLE)
                        router.navigate(Routes.examples)
                    })
                )
            )
        )
    );

const container = new Container(router);

render(document.querySelector('#root'), navbar, container);
