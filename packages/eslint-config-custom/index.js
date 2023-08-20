module.exports = {
  env: {
    node: true,
    es6: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  overrides: [
    {
      files: ['**/__tests__/**/*'],
      env: {
        jest: true,
      },
    },
  ],
  plugins: ['@typescript-eslint'],
  extends: [
    'turbo',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  rules: {
    'no-console': ['warn', { allow: ['info', 'error'] }],
    'no-plusplus': 'off',
    'no-underscore-dangle': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        argsIgnorePattern: '^_|^unused$',
        varsIgnorePattern: '^_|^unused$',
      },
    ],
  },
};
