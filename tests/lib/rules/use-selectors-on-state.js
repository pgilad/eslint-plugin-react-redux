/**
 * @fileoverview Enforce usage of selector functions on state in mapStateToProps
 * @author Gilad Peleg
 */
'use strict';

var rule = require('../../../lib/rules/use-selectors-on-state');
var RuleTester = require('eslint').RuleTester;

const parserOptions = {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
        experimentalObjectRestSpread: true,
        jsx: true,
    },
};

var ruleTester = new RuleTester({ parserOptions });
ruleTester.run('use-selectors-on-state', rule, {
    valid: [
        {
            code: `
            const mapStateToProps = state => {
                const account = getAccountsEntity(state);

                return {
                    account,
                };
            };
        `,
        },
        {
            code: `
                const mapStateToProps = state => {
                    const c = whatever.outer;

                    return {
                        account,
                    };
                };
            `,
        },
    ],
    invalid: [
        {
            code: `
                const mapStateToProps = state => {
                    const { activeAccountId, activeWorkspaceId } = state.appState;

                    return {
                        account,
                    };
                };
            `,
            errors: [{ messageId: 'nonSelector', data: { usage: 'state.appState' } }],
        },
        {
            code: `
                const mapStateToProps = state => {
                    const { w, s } = state;

                    return {
                        account,
                    };
                };
            `,
            errors: [{ messageId: 'nonSelector', data: { usage: '{ w, s } = state' } }],
        },
        {
            code: `
                const mapStateToProps = state => {
                    const b = state.outer;

                    return {
                        account,
                    };
                };
            `,
            errors: [{ messageId: 'nonSelector', data: { usage: 'state.outer' } }],
        },
        {
            code: `
                const mapStateToProps = state => {
                    const d = state['a'];
                    const e = state[d];

                    return {
                        account,
                    };
                };
            `,
            errors: [
                { messageId: 'nonSelector', data: { usage: "state['a']" } },
                { messageId: 'nonSelector', data: { usage: 'state[d]' } },
            ],
        },
        {
            code: `
                const mapStateToProps = state => {
                    const account = getAccountsEntity(state.inner);

                    return {
                        account,
                    };
                };
            `,
            errors: [{ messageId: 'nonSelector', data: { usage: 'state.inner' } }],
        },
    ],
});
