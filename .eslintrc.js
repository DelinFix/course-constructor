module.exports = {
  extends: [
    'airbnb-base',
    'airbnb/rules/react',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:react-hooks/recommended',
    'airbnb-typescript/base',
    'plugin:prettier/recommended'
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'import', 'react', 'react-hooks'],
  parserOptions: {
    project: ['tsconfig.json'],
    requireConfigFile: false,
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  ignorePatterns: ['README.md', '.eslintrc.js', 'vite.config.ts'],
  env: {
    es6: true,
    browser: true,
    node: true
  },
  rules: {
    'linebreak-style': 'off',

    'arrow-parens': ['error', 'as-needed'], // for prettier work
    'object-curly-newline': 'off', // for prettier work
    'no-mixed-operators': 'off', // for prettier work
    'function-paren-newline': 'off', // for prettier work
    'space-before-function-paren': 0, // for prettier work
    'no-plusplus': 'off',
    'arrow-body-style': 'off',
    'no-param-reassign': ['error', { props: false }],

    'max-len': ['error', 120, 2, { ignoreUrls: true, ignorePattern: 'd="([\\s\\S]*?)"' }], // ignore path for svg
    'no-console': 'off',
    'no-alert': 'error',

    radix: 'off', // parseInt, parseFloat without encode

    'react/require-default-props': 'off',
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    'react/react-in-jsx-scope': 'off',

    'prefer-destructuring': 'off',

    'react/no-did-mount-set-state': 'off',
    'react/no-unused-prop-types': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'react/jsx-props-no-spreading': 'off',

    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/no-misused-promises': [
      2,
      {
        checksVoidReturn: {
          attributes: false
        }
      }
    ],
    '@typescript-eslint/no-floating-promises': ['warn'],
    '@typescript-eslint/no-explicit-any': ['off'],

    'prettier/prettier': [
      'warn',
      {
        endOfLine: 'auto'
      }
    ],

    'import/extensions': [
      'error',
      'ignorePackages',
      {
        '': 'never',
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never'
      }
    ],
    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': [
      'error',
      { devDependencies: false, optionalDependencies: false, peerDependencies: false }
    ]
  },
  overrides: [
    {
      files: ['*.ts'],
      rules: {
        '@typescript-eslint/no-namespace': 'off'
      }
    }
  ],
  settings: {
    react: {
      pragma: 'React',
      version: 'detect'
    }
  }
}
