const path = require('path');
module.exports = {
    // 1. Estableciendo el modo de ejecución
    mode: 'development',
    // 2. Se crea el archivo de entrada
    entry: './client/index.js',
    // 3. Especificando el archivo de salida
    output:{
        // 4. Ruta absoluta de salida
        path: path.join(__dirname, 'public'),
        // 5. Nombre del archivo de salida
        filename: 'js/bundle.js'
        // 6. Ruta del path publica para fines del servidor de desarrollo
    },
    devServer: {
        static: path.join(__dirname, 'public'),
        port: 8085,
        host: 'localhost'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use:[
                    {
                        loader: 'babel-loader',
                        options: {
                            presets:[
                                [
                                    '@babel/preset-env',
                                    {
                                        'modules': false,
                                        'useBuiltIns': 'usage',
                                        'targets': {"chrome": "80"},
                                        'corejs': 3
                                    }
                                ]
                            ],
                            "plugins": [
                                [
                                    "module-resolver",
                                    {
                                        "root": ["./"],
                                        "alias": {
                                            "@client" : "./client",
                                        }
                                    }
                                ]
                            ]
                        }
                    }
                ]
            }
        ]
    }
}