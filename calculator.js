// jshint esversion:6

// ロードする
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

// body-parserの使用
app.use(bodyParser.urlencoded({extended: true}));

// index.html でrespondする
app.get("/",function(req,res){
  res.sendFile(__dirname + "/index.html");
});


// index.htmlのフォームでpostされた部分
app.post("/",function(req, res){

 // bodyの中のnum1, num2を取得する
 // Number()で値を数値に
  var num1 = Number(req.body.num1);

  var result = num1;

  res.send("暗号は " + result);
});

app.listen(3000);