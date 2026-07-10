module.exports = {
  root: true,
  extends: '@react-native',
  overrides: [
    {
      files: ['metro.config.js', 'jest.config.js', 'babel.config.js'],
      parserOptions: { requireConfigFile: false },
    },
  ],
};
