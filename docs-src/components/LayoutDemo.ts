import { Button, Content, Layout, Molecule, Text, Title } from "@ouikit/core";

export class LayoutDemo implements Molecule {
    render() {
        return [
            new Title('Layout').setSize('m'),
            new Layout(new Text('Left'), new Text('Right')).setAlign('row'),
            new Layout(new Text('Top'), new Text('Bottom')).setAlign('column')
        ]
    }
}