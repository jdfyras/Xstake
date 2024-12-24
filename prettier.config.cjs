/**
 * prettier.config.cjs
 */
module.exports = {
  // Use single quotes in JS/TS files
  singleQuote: true,

  // Keep trailing commas where valid in ES5 (objects, arrays, etc.)
  trailingComma: 'es5',

  // Always use semicolons
  semi: true,

  // Maximum line length before wrapping
  printWidth: 80,

  // Indentation of 2 spaces
  tabWidth: 2,

  // Do not use tabs, use spaces
  useTabs: false,

  // Print spaces between brackets in object literals
  bracketSpacing: true,

  // Always include parentheses around arrow function parameters
  arrowParens: 'always',

  // Respect the operating system's end of line style (useful on Windows)
  endOfLine: 'auto',

  // JSX settings
  // Keep double quotes in JSX
  jsxSingleQuote: false,
  // Put the `>` of a multi-line JSX element at the end of the last line
  bracketSameLine: false,

  // ----- OPTIONAL: Import Sorting -----
  // Requires a Prettier plugin such as:
  //   npm install --save-dev @trivago/prettier-plugin-sort-imports
  // to handle importOrder, importOrderSeparation, and importOrderSortSpecifiers.
  // If you don’t use import sorting, remove these lines.
  // importOrder: [
  //   // React imports first
  //   '^react(.*)$',
  //   // Then Material UI imports
  //   '^@mui/(.*)$',
  //   // Other external packages
  //   '^[^.]',
  //   // Aliased or local imports
  //   '^@/(.*)$',
  //   // Relative imports
  //   '^\\./',
  //   '^\\.\\./',
  // ],
  // importOrderSeparation: true,
  // importOrderSortSpecifiers: true,
};
