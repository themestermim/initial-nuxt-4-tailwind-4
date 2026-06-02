import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
    {
        rules: {
            'no-var': 'error',
            'prefer-const': 'error',
            'eqeqeq': ['error', 'always'],
            'no-console': 'warn',
            'semi': ['error', 'never'],
            'comma-dangle': ['error', 'always-multiline'],
            'vue/no-mutating-props': 'error',
            'vue/no-unused-components': 'warn',
            'vue/multi-word-component-names': 'off',
        },
    },
)
