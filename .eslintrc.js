module.exports = {
  root: true,
  extends: [
    '@react-native-community', // base config RN
    'plugin:@typescript-eslint/recommended', // TypeScript rules
    'plugin:prettier/recommended', // tích hợp prettier vào ESLint
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier'],
  rules: {
    // Customize theo nhu cầu dự án
    'prettier/prettier': 'warn',
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {argsIgnorePattern: '^_', varsIgnorePattern: '^_'},
    ],
    'react/react-in-jsx-scope': 'off', // RN không cần import React
  },
};
