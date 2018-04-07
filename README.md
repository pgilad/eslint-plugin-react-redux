# eslint-plugin-react-redux
> Find issues with react-redux code usages

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

## Installation

You'll first need to install [ESLint](http://eslint.org):

```bash
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-react-redux`:

```bash
$ npm install @pgilad/eslint-plugin-react-redux --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-react-redux` globally.

## Usage

Add `react-redux` to the plugins section of your `.eslintrc` configuration file.

```json
{
    "plugins": [
        "@pgilad/eslint-plugin-react-redux"
    ]
}
```

Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "@pgilad/react-redux/use-selectors-on-state": 1
    }
}
```

## Supported Rules

- [use-selectors-on-state](docs/rules/use-selectors-on-state.md)

## License

MIT
