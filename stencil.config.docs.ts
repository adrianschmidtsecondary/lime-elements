import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import { kompendium } from 'kompendium';
import guides from './guides';

export const config: Config = {
    hashFileNames: false,
    namespace: 'lime-elements',
    outputTargets: [
        {
            type: 'docs-custom',
            strict: true,
            generator: kompendium({
                typeRoot: './src/interface.d.ts',
                guides: guides,
            }),
        },
        {
            type: 'www',
            serviceWorker: null,
            dir: 'www',
            baseUrl: '/',
            copy: [
                { src: 'style/color-palette-extended-light-mode-only.css' },
                { src: 'style/color-palette-extended.css' },
                {
                    src: '../node_modules/kompendium/dist/',
                    dest: 'assets/kompendium/',
                },
                {
                    src: 'favicon.svg',
                    dest: 'favicon.svg',
                },
            ],
        },
    ],
    plugins: [sass()],
    tsconfig: './tsconfig.docs.json',
    globalStyle: 'src/global/core-styles.scss',
};
