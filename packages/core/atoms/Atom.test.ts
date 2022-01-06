import { Atom } from "./Atom";

describe(Atom.name, () => {
    const atom = new Atom();

    it('Could subscribe to event', () => {
        const subscriptionReturn = atom.on('click', () => { });
        expect(subscriptionReturn).toEqual(atom);
        expect(Object.keys(atom.getEventsListeners())[0]).toEqual('click');
    });

    it('Could subscribe to changes', () => {
        const onChangesDetectedCallback = jest.fn();
        let subscriptionReturn = atom.onChangesDetected(onChangesDetectedCallback);
        expect(subscriptionReturn).toEqual(atom);
        subscriptionReturn = atom.detectChanges();
        expect(subscriptionReturn).toEqual(atom);
        expect(onChangesDetectedCallback).toHaveBeenCalledTimes(1);
    })
})