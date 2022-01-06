import { ref } from "./ref";

describe(ref.name, () => {
    it('Should return value getter', () => {
        const [getState] = ref(0);
        expect(getState()).toEqual(0);
    });

    it('Should return value setter', () => {
        const [getState, setState] = ref(0);
        setState(1);
        expect(getState()).toEqual(1);
    });

    it('Should provide onChange callback', () => {
        const [getState, setState] = ref(0, {
            onChange(state) {
                expect(state).toEqual(getState());
            }
        });
        setState(1);
    });

    it('Should call onChange callback at first time thank specific option', () => {
        ref(0, {
            applyOnChangeCallbackAfterInit: true,
            onChange(state) {
                expect(state).toEqual(0);
            }
        });
    });
})