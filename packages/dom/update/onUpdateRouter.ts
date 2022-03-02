import { Router, RouterControllerTools } from "@ouikit/router";
import { render } from "..";

/** @deprecated */
export function onUpdateRouter(router: Router, element: HTMLElement) {
    element.innerHTML = "";
    const options: RouterControllerTools = {
        mount(...atoms) {
            render(element, ...atoms);
        }
    };

    const activeRoute = router.getActiveRoute();
    console.log(activeRoute);
    console.log(router.config);

    window.history.pushState({}, '', `${router.config.useHash ? "#/" : ''}${activeRoute}`)

    const activeRouterController = router.getActiveRouterController();

    if (!!activeRouterController) {
        activeRouterController(options);
    }
}