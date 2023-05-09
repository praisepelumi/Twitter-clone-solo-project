const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

/*We are basically telling webpack to take index.js from entry. Then check for all file extensions in resolve. 
After that apply all the rules in module.rules and produce the output and place it in main.js in the public folder.*/

module.exports = {
    mode: "development", 
    entry: "/index.js", 
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "public"),
    },
    
    target: "web",
    devServer: {
      proxy: {
        '/test': {
          target: 'http://localhost:3000/',
        },
      },
    },
    resolve: {
        extensions: ['.js','.jsx','.json'] 
    },
    plugins: [
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: path.resolve(__dirname, './public/index.html'),
      }),
    ],
    module:{
        rules: [
            {
                test: /\.jsx?/,    //kind of file extension this rule should look for and apply in test
                exclude: /node_modules/, //folder to be excluded
                use:  {
                  loader: 'babel-loader',
                  options: {
                    presets: ['@babel/preset-env', '@babel/preset-react'],
                  },
                },
            },

            {
              test: /\.s[ac]ss$/i,
              use: ['style-loader', 'css-loader', 'sass-loader'],
            },
        ]
    }
}