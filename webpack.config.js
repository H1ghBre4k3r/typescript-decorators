/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");
const DtsBundleWebpack = require("dts-bundle-webpack");
const nodeExternals = require("webpack-node-externals");

module.exports = {
    entry: "./src/index.ts",
    target: "node",
    mode: "production",
    externals: [nodeExternals()],
    module: {
        rules: [
            {
                test: /\.ts?$/,
                use: "ts-loader",
                exclude: /node_modules|example/,
            },
        ],
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
    },
    output: {
        filename: "index.js",
        path: path.resolve(__dirname, "build"),
        // library: "",
        libraryTarget: "commonjs-module",
    },
    plugins: [
        new DtsBundleWebpack({
            name: "decoratory",
            main: "build/index.d.ts",
            out: "index.d.ts",
            removeSource: true,
        }),
    ],
};
