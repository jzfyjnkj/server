import express from "express";
import { apiHandle } from '../services/errorCheck';
import {readImg} from '../services/readImg';
const images = express.Router();

// 获取对应的轮播图链接地址
images.get('/banner/:id', async (req, res) => {
    const id = req.params.id;
    const host = req.headers.host, arr: string[] = [];

    const data = await readImg(`../../public/imgs/banner/${id}`);
    data.forEach(val => {
        arr.push(`http://${host}/imgs/banner/${id}/${val}`);
    })
    
    const result = apiHandle(req, arr);
    res.send(result);
})

// 获取对应文件下的图片链接地址
images.get('/:id', async (req, res) => {
    const id = req.params.id;
    const host = req.headers.host, arr: string[] = [];

    const data = await readImg(`../../public/imgs/${id}`);
    
    data.forEach(val => {
        arr.push(`http://${host}/imgs/${id}/${val}`);
    })
    
    const result = apiHandle(req, arr);
    res.send(result);
})

export = images;

