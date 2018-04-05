# Enforce usage of selector functions on state in mapStateToProps (use-selectors-on-state)

## Rule Details

This rule aims to enforce usage of selectors on state in `mapStateToProps`. It is a bad
design practice to teach the UI component about the structure of the store:

- It prevents re-use of selectors
- Leaves multiple places to refactor if state structure changes
- Prevents using caching (memoize) functions for non-deterministic or expensive selectors

Examples of **incorrect** code for this rule:

```js
const mapStateToProps = state => {
    const account = state.account;

    return { account };
};
```

```js
const mapStateToProps = state => {
    const { account } = state;

    return { account };
};
```

```js
const mapStateToProps = state => {
    const drone = getDrone(state.drones);

    return { account };
};
```

```js
const mapStateToProps = state => {
    const droneId = 40;
    const drone = state[droneId];

    return { account };
};
```

Examples of **correct** code for this rule:

```js
const mapStateToProps = state => {
    const account = getAccount(state);

    return { account };
};
```

## When Not To Use It

If you don't care about direct state usage in `mapStateToProps` or you don't use `connect` from `react-redux`

## Further Reading

Check out [Reselect](https://www.google.co.il/search?q=reselect&oq=reselect&aqs=chrome.0.0j69i60l2j0l3.2125j1j7&sourceid=chrome&ie=UTF-8)
for a great caching library to be used for expensive/non-deterministic selectors
