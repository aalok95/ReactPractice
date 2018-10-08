var path = require("path");

module.exports = {
    entry: {
        main: "./src/index.jsx"
    },
    output: {
        path: path.resolve("./dist/"),
        filename: "[name].bundle.js"
    },
    devtool: "source-map",
    resolve: {
		modules: ["node_modules"],
        extensions: [".jsx", ".js", ".json"]
    },    
    module: {
        rules: [
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    }
};