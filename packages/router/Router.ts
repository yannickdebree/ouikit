import { Atom } from "@ouikit/core";
import { RouterController } from "./RouterController";

export class Router extends Atom {
    private activeRoute: string;

    constructor(private config: { routes: { [route: string]: RouterController } }) {
        super();
        this.activeRoute = Object.keys(this.config.routes)[0];
    }

    navigate(route: string) {
        if (this.activeRoute === route) {
            return;
        }
        if (!Object.keys(this.config.routes).includes(route)) {
            throw new Error(`"${route} is not defined as route in your router.`);
        }
        this.activeRoute = route;
        this.detectChanges();
    }

    getActiveRouteController() {
        return this.config.routes[this.activeRoute];
    }
}