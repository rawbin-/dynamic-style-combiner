const path = require('path')
const fs = require('fs')

console.log(fs.readdirSync('./html-data'))

// const getDynamicHTML = require('../src/utils/get-dynamic-html')
// const {parseStylesFromText} = require('../src/utils/parse-styles')
//
// const styleFilter = (content) => {
//     return /\.mathjax|\.mjx/i.test(content)
// }
//
// getDynamicHTML('http://www.baidu.com').then(html => {
//     return parseStylesFromText(html,{
//         compress: true,
//         styleFilter
//     })
// }).then(styleText => {
//     console.log(styleText)
// })


const str = `/*.header1 {*/
    /*position: running(header);*/
    /*color: #cccccc;*/
    /*padding-top: 25pt;*/
    /*}*/
    /*.footer {*/
    /*position: running(footer);*/
    /*}*/
    .pageNext[data-v-56beb6ce] {
    page-break-after: always;
}`

console.log(str.replace(/\/\*.*?\*\//g,''))
