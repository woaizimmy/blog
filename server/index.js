const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser')
const cors = require('cors');
const express = require('express');
const api = require('./api'); 
const app = express();
// const cookieParser=require('cookie-parser');
const session=require('express-session');

//跨域
app.use(cors());
// app.use(cookieParser());
app.use(express.json({limit: '5mb'}));
// app.use(session({
//     secret:'12345',
//     cookie:{maxAge:60 * 1000 * 60},
//     resave:false,
//     saveUninitialized:true
// }))

app.use(bodyParser.json());
//当extended为false的时候，键值对中的值就为'String'或'Array'形式，为true的时候，则可为任何数据类型。
app.use(bodyParser.urlencoded({extended: false}));
app.use(api);

// 访问静态资源文件 这里是访问所有dist目录下的静态资源文件
// app.use(express.static(path.resolve(__dirname, '../dist')))
// // 因为是单页应用 所有请求都走/dist/index.html
// app.get('*', function(req, res) {
//     const html = fs.readFileSync(path.resolve(__dirname, '../dist/index.html'), 'utf-8')
//     res.send(html)
// })

// 监听8088端口
app.listen(8080);
console.log('success listen…………');