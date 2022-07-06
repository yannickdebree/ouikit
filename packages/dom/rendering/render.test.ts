import { Molecule, Title } from "@ouikit/core";
import { MissingRootElementError, UnknowContentElementTypeError } from "../errors";
import { render } from "./render";

describe.only(render.name, () => {
    const root = document.body;

    afterEach(() => {
        root.innerHTML = '';
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
        render(root, undefined);
        expect(root.innerHTML).toBe('')
        render(root, null);
        expect(root.innerHTML).toBe('')
    });

    it('Should write text content in root element', () => {
        render(root, 'Hello world');
        expect(root.textContent).toBe('Hello world')
        render(root, 'Hello ', 'world');
        expect(root.textContent).toBe('Hello world')
    });

    it.skip('Should render atom in root element', () => {
        render(root, new Title('Hello world'));
        expect(root.innerHTML).toBe('<h1>Hello world</h1>')
    });

    it.skip('Should render molecule in root element', () => {
        class MyMolecule implements Molecule {
            render() {
                return [
                    new Title('Hello world')
                ]
            }
        }

        render(root, new MyMolecule());
        expect(root.innerHTML).toBe('<h1>Hello world</h1>')
    });

    it.skip('Should throw error for other content type in root element', () => {
        class MyMolecule { }

        try {
            render(root, new MyMolecule() as Molecule);
        } catch (err) {
            expect(err).toBeInstanceOf(UnknowContentElementTypeError);
        }
    });

    it.skip('Should render atom after change', () => {
        const title = new Title('Hello world');
        render(root, title);
        title.setContent('New title');
        expect(root.innerHTML).toBe('<h1>New title</h1>')
    });
})