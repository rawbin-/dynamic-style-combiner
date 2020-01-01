const path = require('path')
const fs = require('fs')
const cssParser = require('css')
const minify = require('html-minifier').minify


function parseStylesFromPath(inPath,outPath,options){
    const fileList = fs.readdirSync(inPath)
    pathList = fileList.map(item => {
       return path.resolve(inPath,item)
    })
    parseStylesFromPathList(pathList,outPath,options)
}

function parseStylesFromPathList(inPathList,outPath, options){
    const stat = fs.statSync(outPath)
    const pathList = inPathList || []
    pathList.forEach((item) => {
        const content = parseStylesFromFile(item,options)
        let outFilePath = outPath
        if(stat.isDirectory()){
            outFilePath = path.resolve(outPath,path.basename(item) + '.css')
            fs.writeFileSync(outFilePath,content)
        }else{
            fs.appendFileSync(outFilePath,content)
        }
    })

}

function parseStylesFromFile(filePath, options){
    console.log('processing file:',filePath)
    if(fs.existsSync(filePath)){
        const content = fs.readFileSync(path.resolve(filePath),'utf-8')
        return parseStylesFromText(content, options)
    }else{
        console.log('路径不存在:',filePath)
        return ''
    }

}

function parseStylesFromText(content, options){
    content = content || ''
    const styleContentList = []
    const styleFilter = options.styleFilter || (() => true)

    // 移除奇怪的注释
    htmlContent = content.replace(/\/\*.*?\*\//g,'')

    htmlContent.replace(/<(style)[^>]*?>([\w\W]*?)<\/\1>/g,(match,$1, $2) => {
        if(styleFilter($2)){
            styleContentList.push($2)
        }
    })

    const cssText = styleContentList.join(' ')
    const ast = cssParser.parse(cssText)
    return cssParser.stringify(ast,options)
}



module.exports = {
    parseStylesFromPath,
    parseStylesFromPathList,
    parseStylesFromText,
    parseStylesFromFile
}
