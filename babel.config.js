module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@': './src',
        },
      },
    ],
    ['@babel/plugin-transform-private-methods', {loose: true}],
    'react-native-reanimated/plugin', // để reanimated luôn ở cuối
  ],
};
