module.exports = {
    extends: ['./tslint.js'],
    linterOptions: {
        exclude: [],
    },

    rules: {
        'consecutive-overloads': false,
        'jsx-use-translation-function': false,
        'no-accessor-field-mismatch': false,
        'no-array-delete': false,
        'no-collection-size-mischeck': false,
        'no-dead-store': false,
        'no-element-overwrite': false,
        'no-gratuitous-expressions': false,
        'no-ignored-initial-value': false,
        'no-ignored-return': false,
        'no-in-misuse': false,
        'no-invalid-await': false,
        'no-misleading-array-reverse': false,
        'no-redundant-boolean': false,
        'no-return-type-any': false,
        'no-self-assignment': false,
        'no-submodule-imports': [
            true,
            '@stencil/core/dist/declarations/output-targets',
        ],
        'no-undefined-argument': false,
        'no-unused-array': false,
        'no-use-of-empty-return-value': false,
        'no-useless-cast': false,
        'no-useless-intersection': false,
        'no-variable-usage-before-declaration': false,
        'parameters-max-number': false,
        'prefer-immediate-return': false,
        'use-type-alias': false,
    },
};
