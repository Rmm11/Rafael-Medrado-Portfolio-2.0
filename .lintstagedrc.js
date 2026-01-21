const path = require('path');

const buildEslintCommand = filenames =>
  `eslint --fix ${filenames
    .map(f => path.relative(process.cwd(), f))
    .join(' ')}`;

module.exports = {
  '*.{js,jsx}': [buildEslintCommand, 'prettier --write'],
  '*.{css,postcss}': 'stylelint --fix',
  '*.styled.{js,jsx}': 'stylelint --fix',
};
