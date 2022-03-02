import { Title } from "@ouikit/core";
import { render } from "./render";
let { useTheme } = require('./useTheme')

describe(render.name, () => {
    it('Must current theme setted one time', () => {
        useTheme = jest.fn();
        render(document.body, new Title());
        expect(useTheme).toHaveBeenCalledTimes(1);
    })
})