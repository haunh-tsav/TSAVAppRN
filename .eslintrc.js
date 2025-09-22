module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  extends: [
    '@react-native-community', // base config của RN
    'plugin:@typescript-eslint/recommended', // rule cho TypeScript
    'prettier', // tắt rule xung đột Prettier
  ],
  plugins: ['@typescript-eslint', 'prettier'],
  rules: {
    'prettier/prettier': ['error', {endOfLine: 'auto'}], // báo lỗi khi format sai
    '@typescript-eslint/no-unused-vars': ['warn'],
  },
};
