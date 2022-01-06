import { ContentContainer } from "./ContentContainer";
import { Title } from "./Title";

describe(ContentContainer.name, () => {
    it('Could content be changed', () => {
        const contentContainer = new ContentContainer();
        const content = [
            'This is a text content',
            new Title(),
            undefined,
            null
        ]
        expect(contentContainer.setContent(...content)).toEqual(contentContainer);
        expect(contentContainer.getContent()).toEqual(content);
    });
})