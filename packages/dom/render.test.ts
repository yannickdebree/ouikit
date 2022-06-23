import { Molecule, Title } from "@ouikit/core";
import { MissingRootElementError } from "./errors";
import { render } from "./render";

describe(render.name, () => {
    afterEach(() => {
        document.body.innerHTML = '';
    })

    it('Missing root element throws an error', () => {
        try {
            render(null, new Title());
        } catch (err) {
            expect(err).toBeInstanceOf(MissingRootElementError);
        }
        try {
            render(undefined, new Title());
        } catch (err) {
            expect(err).toBeInstanceOf(MissingRootElementError);
        }
    });

    it('Should do nothing for null content', () => {
        render(document.body, undefined);
        expect(document.body.innerHTML).toBe('')
        render(document.body, null);
        expect(document.body.innerHTML).toBe('')
    });

    it('Should write text content in root element', () => {
        render(document.body, 'Hello world');
        expect(document.body.textContent).toBe('Hello world')
    });

    it('Should render atom in root element', () => {
        render(document.body, new Title('Hello world'));
        expect(document.body.innerHTML).toBe('<h1>Hello world</h1>')
    });

    it('Should render molecule in root element', () => {
        class MyMolecule implements Molecule {
            render() {
                return [
                    new Title('Hello world')
                ]
            }
        }

        render(document.body, new MyMolecule());
        expect(document.body.innerHTML).toBe('<h1>Hello world</h1>')
    });
})