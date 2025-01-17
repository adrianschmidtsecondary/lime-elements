import { Component, Prop, h, Host } from '@stencil/core';
import { abbreviate } from './format';

/**
 * The Badge component can display both `number` and `string` as `label`.
 *
 * @exampleComponent limel-example-badge-number
 * @exampleComponent limel-example-badge-string
 */
@Component({
    tag: 'limel-badge',
    styleUrl: 'badge.scss',
    shadow: true,
})
export class Badge {
    /**
     * Label to display in the badge.
     * Numeric labels larger than 999 will be rounded and abbreviated.
     * String labels get truncated if their length is longer than
     * six characters.
     */
    @Prop({ reflect: true })
    public label: number | string;

    public render() {
        return (
            <Host
                title={this.labelIsLarge() ? this.label : ''}
                class={{
                    'has-large-label': this.labelIsLarge(),
                }}
            >
                {this.renderLabel()}
            </Host>
        );
    }

    private renderLabel() {
        if (typeof this.label === 'number') {
            return <span>{abbreviate(this.label)}</span>;
        } else if (typeof this.label === 'string') {
            return <span>{this.label}</span>;
        }
    }

    private labelIsLarge() {
        const largeNumericLabel = 999;
        const largeStringLabel = 6;
        if (
            (typeof this.label === 'number' &&
                this.label > largeNumericLabel) ||
            (typeof this.label === 'string' &&
                this.label.length > largeStringLabel)
        ) {
            return true;
        }
    }
}
