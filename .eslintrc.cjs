module.exports = {
    env: {
      browser: true,
      node: true,
      es2021: true,
    },
    extends: ['eslint:recommended'],
    parserOptions: {
      ecmaVersion: 12,
      sourceType: 'module',
    },
    rules: {
      indent: ['error', 2],
      quotes: ['error', 'single'],
      quoteProps: ['error', 'as-needed'],
      'no-trailing-spaces': 'error',
      'no-multiple-empty-lines': ['error', { max: 0 }],
      'eol-last': ['error', 'always'],
      'comma-spacing': ['error', { before: false, after: true }],
      'operator-linebreak': ['error', 'before'],
    },
  };
  