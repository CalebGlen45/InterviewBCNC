/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['plugin:vue/vue3-essential', 'eslint:recommended', '@vue/eslint-config-typescript'],
  rules: {
    'object-curly-spacing': ['error', 'always'],
    'comma-dangle': ['warn', 'always-multiline'],
    'no-use-before-define': ['error', { variables: true, functions: false, classes: true }],
    'no-global-assign': ['error', { exceptions: ['Object'] }],
    'no-nested-ternary': 'error',
    'no-unneeded-ternary': 'error',
    quotes: ['warn', 'single', { avoidEscape: true }],
    'no-multiple-empty-lines': ['error', { max: 2, maxBOF: 1 }],
    '@typescript-eslint/semi': 'error',
    '@typescript-eslint/space-before-function-paren': 'off',
    'vue/no-v-text-v-html-on-component': 'off',
  },
};
