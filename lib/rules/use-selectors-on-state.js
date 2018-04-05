/**
 * @fileoverview Enforce usage of selector functions on state in mapStateToProps
 * @author Gilad Peleg
 */
"use strict";

const checkNode = (node, context) => {
    const parents = context.getAncestors(node);
    const isInsideMapStateToProps = parents.some(parent => {
        if (parent.type !== "VariableDeclarator") {
            return false;
        }
        if (parent.id.type !== "Identifier") {
            return false;
        }
        return parent.id.name === "mapStateToProps";
    });
    if (!isInsideMapStateToProps) {
        return;
    }

    context.report({
        message: "You should not access state directly in `mapStateToProps`. Use a selector function instead.",
        node: node
    });
};

module.exports = {
    meta: {
        docs: {
            description: "Enforce usage of selector functions on state in mapStateToProps",
            category: "Possible Errors",
            recommended: false
        },
        fixable: null,
        schema: [
            // fill in your schema
        ]
    },
    create: function(context) {
        return {
            VariableDeclarator(node) {
                if (node.id.type === "ObjectPattern") {
                    if (node.init.type === "Identifier" && node.init.name === "state") {
                        checkNode(node, context);
                    }
                }
            },
            MemberExpression(node) {
                if (node.object.type === "Identifier" && node.object.name === "state") {
                    if (node.property.type === "Identifier" || node.property.type === "Literal") {
                        checkNode(node, context);
                        return;
                    }
                }
            }
        };
    }
};
