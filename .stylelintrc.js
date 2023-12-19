module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-prettier',
    'stylelint-config-rational-order',
    'stylelint-prettier/recommended'
  ],
  plugins: ['stylelint-order', 'stylelint-scss'],
  rules: {
    'block-no-empty': null,
    'at-rule-empty-line-before': [
      'always',
      {
        except: ['blockless-after-blockless', 'blockless-after-same-name-blockless', 'first-nested'],
        ignore: ['after-comment', 'inside-block'],
        ignoreAtRules: ['apply', 'screen', 'font-face', 'nest']
      }
    ],
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['layer']
      }
    ],
    'string-quotes': 'single',
    'property-no-vendor-prefix': [
      true,
      {
        ignoreProperties: ['text-fill-color', 'background-clip']
      }
    ],
    'prettier/prettier': [
      true,
      {
        endOfLine: 'auto'
      }
    ],
    'selector-class-pattern': null, //enable camelCase,
    'media-query-no-invalid': null // don't support scss variables
  },
  overrides: [
    {
      files: ['**/*.scss'],
      customSyntax: 'postcss-scss'
    }
  ]
}
