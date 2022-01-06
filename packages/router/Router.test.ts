import { Router } from "./Router";

describe(Router.name, () => {
    const router = new Router({
        routes: {
            '': () => { },
            'contact': () => { }
        }
    });

    it("The first route defined must be called", () => {
        expect(router.getActiveRoute()).toEqual('');
    });

    it('Associated controller must be called after navigation', () => {
        const navigationReturn = router.navigate('contact');
        expect(navigationReturn).toEqual(router);
        expect(router.getActiveRoute()).toEqual('contact');
    })
})