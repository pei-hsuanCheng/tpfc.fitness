module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
  },
  extends: ['airbnb-base'],
  parserOptions: {
    parser: 'babel-eslint',
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: 'module',
  },
  plugins: [],
  rules: {
    'no-console': 0,
    'import/no-unresolved': 0,
    'import/extensions': 'never',
    'global-require': 0,
    'linebreak-style': ['error', 'windows'],
    'max-len': ['error', { code: 150 }],
    'no-param-reassign': ['error', { props: false }],
    'no-script-url': 0,
  },
};
