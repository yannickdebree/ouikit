import { Title } from "@ouikit/core";
import { MissingRootElementError } from "./errors";
import { render } from "./render";

describe(render.name, () => {
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
    })

    it('Should write text content in root element', () => {
        render(document.body, 'Hello world');
        expect(document.body.textContent).toBe('Hello world')
    })
})