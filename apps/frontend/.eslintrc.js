module.exports = {
  extends: ['next', 'custom'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'react/display-name': 'off',
    '@next/next/no-html-link-for-pages': ['error', 'src/pages/'],
  },
};
