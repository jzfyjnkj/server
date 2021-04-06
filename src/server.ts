import express from "express";
import bodyParse from 'body-parser';
import path from 'path'
const app = express();

// 静态页面
app.use(express.static(path.resolve(__dirname, "../public")));  // 静态文件

app.use(bodyParse.json());
app.use(bodyParse.urlencoded({extended : true}));

// 数据请求接口
const basic = '/api';
app.use(`${basic}`, require('./routes/init'));
app.use(`${basic}/images`, require('./routes/images'));
app.use(`${basic}/product`, require('./routes/product'));
app.use(`${basic}/cancact`, require('./routes/cancact'));
app.use(`${basic}/recruit`, require('./routes/recruit'));
app.use(`${basic}/news`, require('./routes/newsList'));
app.use(`${basic}/introduce`, require('./routes/introduce'));
app.use(`${basic}/system`, require('./routes/system'));
app.use(`${basic}/article`, require('./routes/article'));

app.use('*', (req: any, res: any) => {
    res.send('没有该路径')
})

// 开启服务
app.listen(5008, () => {
    console.log('服务已启动...');
});