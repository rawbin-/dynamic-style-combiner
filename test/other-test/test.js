const {parseStylesFromFile} = require('../../src/utils/parse-styles')
const fs = require('fs')

const styleFilter = (content) => {
    return /\.mathjax|\.mjx/i.test(content)
}

const cssText1 = parseStylesFromFile('./test.log',{
    styleFilter
})
fs.writeFileSync('mathjax.css',cssText1)

const cssText2 = parseStylesFromFile('./test.log',{
    compress:true,
    styleFilter
})
fs.writeFileSync('mathjax.min.css',cssText2)
