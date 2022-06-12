function isBabelRegister(caller) {
    return !!(caller && caller.name === "@babel/register");
}

module.exports = (babelApi) => {
    const mode = process.env.NODE_ENV;

    babelApi.env(mode == "production" ? "production" : "development");
    const isRegister = babelApi.caller(isBabelRegister);

    const presets = [
        "@babel/preset-env",
        "@babel/preset-typescript",
        "@babel/preset-react"
    ];

    const plugins = mode == "production" ? [
        "@babel/plugin-transform-runtime",
        "@babel/plugin-proposal-class-properties",
        "@babel/plugin-proposal-class-static-block",
        "@babel/plugin-proposal-private-property-in-object",
        "@babel/plugin-syntax-top-level-await",
        "@babel/plugin-proposal-logical-assignment-operators",
        "@babel/plugin-proposal-numeric-separator",
        "@babel/plugin-proposal-export-namespace-from",
        "@babel/plugin-proposal-nullish-coalescing-operator",
        "@babel/plugin-proposal-optional-chaining",
        "@babel/plugin-syntax-dynamic-import",
        "@babel/plugin-syntax-import-meta",
        "@babel/plugin-syntax-bigint",
        "@babel/plugin-proposal-optional-catch-binding",
        "@babel/plugin-proposal-json-strings",
        "@babel/plugin-proposal-async-generator-functions",
        "@babel/plugin-transform-dotall-regex",
        "@babel/plugin-transform-named-capturing-groups-regex",
        "@babel/plugin-proposal-object-rest-spread",
        "@babel/plugin-proposal-unicode-property-regex",
        "@babel/plugin-transform-async-to-generator",
        "@babel/plugin-transform-exponentiation-operator"
    ] : [
        "@babel/plugin-transform-runtime",
        "@babel/plugin-proposal-class-properties",
        "@babel/plugin-proposal-class-static-block",
        "@babel/plugin-proposal-private-property-in-object",
        "@babel/plugin-syntax-top-level-await",
        "@babel/plugin-proposal-logical-assignment-operators",
        "@babel/plugin-proposal-numeric-separator",
        "@babel/plugin-proposal-export-namespace-from",
        "@babel/plugin-proposal-nullish-coalescing-operator",
        "@babel/plugin-proposal-optional-chaining",
        "@babel/plugin-syntax-dynamic-import",
        "@babel/plugin-syntax-import-meta",
        "@babel/plugin-syntax-bigint"
    ];

    return { presets, plugins };
};
