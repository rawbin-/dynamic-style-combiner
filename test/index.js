const {parseStylesFromPath} = require('../src/utils/parse-styles')
const styleFilter = (content) => {
    return /\.mathjax|\.mjx/i.test(content)
}
parseStylesFromPath('./html-data','./css-data',{
    styleFilter
})
