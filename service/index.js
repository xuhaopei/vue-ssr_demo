const path = require('path');
const express = require('express');
const app = express();
const { createBundleRenderer } = require('vue-server-renderer')


const template = require('fs').readFileSync(path.resolve(__dirname,'../index.html'), 'utf-8')
const serverBundle = require(path.resolve(__dirname,'../dist/vue-ssr-server-bundle.json'))
const clientManifest = require(path.resolve(__dirname,'../dist/vue-ssr-client-manifest.json'))

app.use('/auto',express.static(path.resolve(__dirname,'../dist')));

const renderer = createBundleRenderer(serverBundle, {
  template,
  clientManifest
})

// 在服务器处理函数中……
app.get('*', (req, res) => {
  const context = { url: req.url }
  // 这里无需传入一个应用程序，因为在执行 bundle 时已经自动创建过。
  // 现在我们的服务器与应用程序已经解耦！
  renderer.renderToString(context, (err, html) => {
    // 处理异常……
    res.end(html)
  })
})
console.log('http://localhost:8080')
app.listen(8080)