import { Box, Button, Container, Divider, Layout, List, ListItem, Text, TextInput, Title } from '@ouikit/core';
import { createElement } from './createElement';

describe(createElement.name, () => {
    it('Must match with "xl" title', () => {
        const title = new Title().setSize('xl');
        const element = createElement(title);
        expect(element.tagName).toEqual('H1');
    })

    it('Must match with "l" title', () => {
        const title = new Title().setSize('l');
        const element = createElement(title);
        expect(element.tagName).toEqual('H2');
    })

    it('Must match with "m" title', () => {
        const title = new Title().setSize("m");
        const element = createElement(title);
        expect(element.tagName).toEqual('H3');
    })

    it('Must match with "sm" title', () => {
        const title = new Title().setSize("sm");
        const element = createElement(title);
        expect(element.tagName).toEqual('H4');
    })

    it('Must match with "s" title', () => {
        const title = new Title().setSize('s');
        const element = createElement(title);
        expect(element.tagName).toEqual('H5');
    })

    it('Must match with "xs" title', () => {
        const title = new Title().setSize('xs');
        const element = createElement(title);
        expect(element.tagName).toEqual('H6');
    })

    it('Must match with "xs" title', () => {
        const title = new Title().setSize('xs');
        const element = createElement(title);
        expect(element.tagName).toEqual('H6');
    })

    it('Must match with text', () => {
        const text = new Text();
        const element = createElement(text);
        expect(element.tagName).toEqual('P');
    })

    it('Must match with button', () => {
        const button = new Button();
        const element = createElement(button);
        expect(element.tagName).toEqual('BUTTON');
    })

    it('Must match with list', () => {
        const list = new List();
        const element = createElement(list);
        expect(element.tagName).toEqual('UL');
    })

    it('Must match with list item', () => {
        const listItem = new ListItem();
        const element = createElement(listItem);
        expect(element.tagName).toEqual('LI');
    })

    it('Must match with box', () => {
        const box = new Box();
        const element = createElement(box);
        expect(element.tagName).toEqual('DIV');
    })

    it('Must match with container', () => {
        const container = new Container();
        const element = createElement(container);
        expect(element.tagName).toEqual('DIV');
    })

    it('Must match with layout', () => {
        const layout = new Layout();
        const element = createElement(layout);
        expect(element.tagName).toEqual('DIV');
    })

    it('Must match with divider', () => {
        const divider = new Divider();
        const element = createElement(divider);
        expect(element.tagName).toEqual('HR');
    })

    it('Must match with input', () => {
        const input = new TextInput();
        const element = createElement(input);
        expect(element.tagName).toEqual('INPUT');
    })
})