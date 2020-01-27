// next.config.js
const withCSS = require('@zeit/next-css')
const withImages = require('next-images')
const withPlugins = require('next-compose-plugins')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')


module.exports = withCSS({
  /* config options here */
})

// module.exports = withPlugins([
//     [withCSS],
//     [withImages]
// ],
// {
//     webpack:(config,options)=>{
//         if(config.resolve.plugins){
//             config.resolve.plugins(new TsconfigPathsPlugin())
//         }else {
//             config.resolve.plugins = [new TsconfigPathsPlugin()]
//         }

//         return config
//     },
//     target:'serverless'
// }
// )

