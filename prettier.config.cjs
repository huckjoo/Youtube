// eslint-disable-next-line no-undef
module.exports = {
  printWidth: 80,
  tabWidth: 2,
  trailingComma: "all",
  singleQuote: true,
  semi: true,
  overrides: [
    {
      files: '*.mock.ts',
      options: {
        singleQuote: false,
        quoteProps: 'preserve',
      },
    },
  ],
  plugins: ['@trivago/prettier-plugin-sort-imports'],
  importOrder: ['<BUILT_IN_MODULES>', '', '<THIRD_PARTY_MODULES>', '', '^@/(.*)$', '', '^[.]'],
  importOrderParserPlugins: ['typescript', 'jsx', 'decorators-legacy'],
  importOrderTypeScriptVersion: '5.0.0',
};
