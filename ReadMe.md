### 使用说明
- test/html-data 里面是从线上抓的数学和化学学科的教案、练习计划和题集的渲染后的 outerHTML
- test/index.js 是把这些抓出来的HTML中的mathjax相关的css 提取出来
- 结果每个学科提取的mathjax样式都一样 在test/css-data中
- 使用其中任意一个即可
- test/other-test 是测试环境抓的，比上面的多几个样式定义
