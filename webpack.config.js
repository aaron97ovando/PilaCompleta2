module.exports = {
    // 1. Especificamos el archivo de entrada
    entry: './client/index.js',
    // 2.Especificaremos el archivo de salida
    output:{
        // 3. Ruta absoluta de salida
        path:'/public',
        // 4. Nombre del archivo de salida
        filename: 'bundle.js'
     },
     devServer :{
         static: './public'
     }
    }