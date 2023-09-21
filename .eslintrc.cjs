const path = require('path')

/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ['@douglasneuroinformatics'],
  parserOptions: {
    project: path.resolve(__dirname, 'tsconfig.base.json')
  }
};
