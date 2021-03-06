module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'react-native-reanimated/plugin',
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ts', '.tsx', '.jsx', '.js', '.json'],
        alias: {
          '@components': './src/components',
          '@contexts': './src/contexts',
          '@screens': './src/screens',
          '@assets': './src/assets',
          '@types': './src/types',
          '@hooks': './src/hooks',
          '@utils': './src/utils',
          '@lib': './src/lib',
        },
      },
    ],
  ],
};
