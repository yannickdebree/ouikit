export class MissingRootElementError extends Error {
    constructor() {
        super('Root element is missing.');
    }
}