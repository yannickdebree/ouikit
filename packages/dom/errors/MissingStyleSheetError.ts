export class MissingStyleSheetError extends Error {
    constructor() {
        super('Stylesheet is missing.');
    }
}