module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'next/core-web-vitals',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'jsx-a11y/control-has-associated-label': 0,
    'react/no-array-index-key': 0,
    'no-console': 1,
    'max-len': 0,
    'react/prop-types': 0,
    'react/react-in-jsx-scope': 0,
    camelcase: 0,
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    radix: 0,
    'arrow-body-style': 0,
    'react/jsx-props-no-spreading': 0,
    'react/destructuring-assignment': 0,
    'react/forbid-prop-types': 0,
    'no-plusplus': 0,
    'no-return-assign': 0,
    'react/function-component-definition': 0,
    'import/prefer-default-export': 0,
    semi: [2, 'never'],
  },
}
