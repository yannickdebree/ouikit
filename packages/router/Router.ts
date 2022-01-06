import { Atom } from "@ouikit/core";
import { RouterController } from "./RouterController";

export class Router extends Atom {
    private activeRoute?: string;

    constructor(private config: { routes: { [route: string]: RouterController } }) {
        super();
        const defaultRoute = Object.keys(this.config.routes)[0];
        if (defaultRoute !== undefined && defaultRoute !== null) {
            this.activeRoute = defaultRoute;
        }
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

    getActiveRouterController() {
        return this.activeRoute !== undefined && this.activeRoute !== null ? this.config.routes[this.activeRoute] : undefined;
    }
}