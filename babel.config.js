module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['module:@react-native/babel-preset'],
    plugins: [
      'nativewind/babel',
      [
        'module-resolver',
        {
          alias: {
            '@': './src',
          },
          extensions: ['.js', '.json'],
          root: ['./src'],
        },
      ],
      ['module:react-native-dotenv'],
      'react-native-reanimated/plugin', 
    ],
    env: {
      production: {
        plugins: ['react-native-paper/babel'],
      },
    },
  };
};