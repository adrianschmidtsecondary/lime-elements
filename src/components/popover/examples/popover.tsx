import { Component, h, State } from '@stencil/core';

@Component({
    tag: 'limel-example-popover',
    shadow: true,
    styleUrl: 'popover.scss',
})
export class PopoverExample {
    @State()
    private isOpen = false;

    constructor() {
        this.openPopover = this.openPopover.bind(this);
        this.onPopoverClose = this.onPopoverClose.bind(this);
    }

    public render() {
        return [
            <limel-button
                primary={true}
                label="Click me!"
                onClick={this.openPopover}
            />,
            <limel-popover open={this.isOpen} onClose={this.onPopoverClose}>
                <p style={{ margin: '0.5rem 1rem' }}>Content</p>
            </limel-popover>,
        ];
    }

    private openPopover() {
        this.isOpen = true;
    }

    private onPopoverClose() {
        this.isOpen = false;
    }
}