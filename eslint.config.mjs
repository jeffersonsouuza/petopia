import js from '@eslint/js';
import globals from 'globals';

export default [
  js.configs.recommended,
  {
    ignores: ['node_modules/', '.git/', '.github/workflows/*.yaml'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parserOptions: {
        ecmaVersion: 2023,
        sourceType: 'module',
      },
    },
  },
  {
    rules: {
      'no-unused-vars': 'warn',
      'no-undef': 'warn',
      'no-console': 'warn',
      quotes: ['error', 'single'],
      semi: ['error', 'always'],
      indent: ['error', 2],
      eqeqeq: ['error', 'always'],
    },
  },
];
