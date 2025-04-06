import { defineConfig } from 'eslint/config';

export default defineConfig([
  {
    files: ['src/**/*.js'],
    rules: {
      semi: ['error', 'always'],
      quotes: ['error', 'single', { avoidEscape: true }],
      indent: ['error', 2],
      'comma-dangle': ['error', 'always-multiline'],
      'object-curly-spacing': ['error', 'always'],
      'quote-props': ['error', 'as-needed'],
      'arrow-parens': ['error', 'as-needed'],
      'max-len': ['error', {
        code: 80,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
      }],
      'no-mixed-spaces-and-tabs': ['error', 'smart-tabs'],
      'no-trailing-spaces': 'error',
      'eol-last': ['error', 'always'],
      'no-empty': 'warn',
      'no-unused-vars': 'warn',
      'no-var': 'error',
      'prefer-const': 'warn',
      'camelcase': 'warn',
      'eqeqeq': ['error', 'always'],
      'no-eval': 'error',
      'no-implied-eval': 'error',
      'no-new-func': 'error',
      'array-bracket-spacing': ['error', 'never'],
      'prefer-template': 'warn',
      'no-console': 'warn',
      'no-duplicate-imports': 'error',
      'arrow-spacing': ['error', { before: true, after: true }],
    },
  },
]);

