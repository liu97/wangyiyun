const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const extractTextPlugin = require("extract-text-webpack-plugin"); 
  
module.exports = {
	devtool: 'source-map',
  	entry: {
  		index:  __dirname + "/src/index.js",
      vendor: ['jquery']
  	},//已多次提及的唯一入口文件
  output: {
    	path: __dirname + "/build/",//打包后的文件存放的地方
    	filename: "[name].js"//打包后输出文件的文件名
  	},
  	devServer: {           
  		contentBase: "./build/",//一个坑！！！！，打包后的index.html和server的地址都不能在项目根目录下
      inline: true,
      // proxy: {
      //  '/static/*': {
      //    target: 'http://localhost:8080',
      //    changeOrigin: true,
      //    secure: false
      //  }
  	},
  	module: {
        rules: [
            {
                test: /\.vue$/,
                use: [{
                    loader: 'vue-loader',
                    options: {
                        loaders: {
                            js: 'babel-loader?{"presets":["es2015"],"plugins": ["transform-object-rest-spread"]}',
                            css: 'vue-style-loader!css-loader'
                        }
                    }
                }],
                exclude: /node_modules/
            },
            {
                test: /(\.jsx|\.js)$/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            "es2015", "react"
                        ]
                    }
                },
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: extractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [{
                        loader: "css-loader",
                    //     options: {
                    //         modules: true,
                    //         localIdentName: '[path][name]__[local]--[hash:base64:5]',
                    // // getLocalIdent: (context, localIdentName, localName, options) => {
                    // //             return localName
                    // //         }
                    //     }
                    }],
                })
            },
            {
              test: /\.(woff2?|woff|eot|svg|ttf|otf)(\?.*)?$/,
              loader: 'url-loader?name=fonts/[name].[md5:hash:hex:7].[ext]',
            },
            {
              test: /\.json$/,
              use: 'json-loader'
            },
            { 
              test: /\.(png|jpg|gif)$/, 
              loader: 'file-loader' }
        ]
    },
    resolve: {
        alias: {
            'vue': 'vue/dist/vue.js'
        }
    },
    plugins: [
    	new extractTextPlugin('css/[name].css'),
    	new HtmlWebpackPlugin({
    	 	filename: __dirname + "/build/index.html",
            template: __dirname + "/src/index.html",//new 一个这个插件的实例，并传入相关的参数,
            chunks: ["manifest","vendor","index"],
            hash: true
        }),
      new webpack.optimize.CommonsChunkPlugin({
           names: ['vendor']
      }),
      new webpack.ProvidePlugin({
          $: "jquery"
      })
    ]
}
