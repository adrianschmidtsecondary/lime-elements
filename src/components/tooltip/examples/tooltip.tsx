import { Component, h } from '@stencil/core';

/**
 * Basic example
 */
@Component({
    tag: 'limel-example-tooltip',
    shadow: true,
    styleUrl: 'tooltip.scss',
})
export class TooltipExample {
    public render() {
        return [
            <limel-button icon="search" id="tooltip-example" />,
            <limel-tooltip
                label="Search"
                helperLabel="alt+f"
                elementId="tooltip-example"
            />,
        ];
    }
}