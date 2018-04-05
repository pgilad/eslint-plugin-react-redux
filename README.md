# eslint-plugin-react-redux

Find issues with react-redux code usages

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-react-redux`:

```
$ npm install eslint-plugin-react-redux --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-react-redux` globally.

## Usage

Add `eslint-react-redux` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "eslint-react-redux"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "eslint-react-redux/rule-name": 2
    }
}
```

## Supported Rules

* Fill in provided rules here





