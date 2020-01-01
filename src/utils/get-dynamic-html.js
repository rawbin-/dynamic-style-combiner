const puppeteer = require('puppeteer')

function getDynamicHTML(url,readyCallback){
    return puppeteer.launch().then(async browser => {
        const page = await browser.newPage()
        await page.goto(url)
        page.on('loaded',() => {
            console.log('page loaded')
        })
        await page.waitForFunction(async () => {
            if(typeof readyCallback === 'function'){
                await readyCallback.call(null)
            }
            return true
        })
        const html = await page.content()
        console.log('page close')
        await page.close()
        return html
    })
}






module.exports = getDynamicHTML
