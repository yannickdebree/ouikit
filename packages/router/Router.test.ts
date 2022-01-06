import { Router } from "./Router";

describe(Router.name, () => {
    const homeController = () => { };
    const contactController = () => { };

    const router = new Router({
        routes: {
            '': homeController,
            'contact': contactController,
        }
    });

    it("The first route defined must be called", () => {
        expect(router.getActiveRoute()).toEqual('');
        expect(router.getActiveRouterController()?.name).toEqual(homeController.name);
    });

    it('Associated controller must be called after navigation', () => {
        const navigationReturn = router.navigate('contact');
        expect(navigationReturn).toEqual(router);
        expect(router.getActiveRoute()).toEqual('contact');
        expect(router.getActiveRouterController()?.name).toEqual(contactController.name);
    })

    it('An undefined route is affected to an undefined router controller', () => {
        const navigationReturn = router.navigate('404');
        expect(navigationReturn).toEqual(router);
        expect(router.getActiveRoute()).toEqual('404');
        expect(router.getActiveRouterController()).toBeUndefined();
    })
})