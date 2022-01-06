import { Atom } from "@ouikit/core";
import { RouterController } from "./RouterController";

export class Router extends Atom {
    private activeRoute: string;

    constructor(private config: { routes: { [route: string]: RouterController } }) {
        super();
        this.activeRoute = Object.keys(this.config.routes)[0];
    }

    getActiveRoute() {
        return this.activeRoute;
    }

    navigate(route: string) {
        if (this.activeRoute !== route) {
            this.activeRoute = route;
            this.detectChanges();
        }
        return this;
    }

    getActiveRouteController() {
        return this.config.routes[this.activeRoute];
    }
}