// jshint esversion:6

// expressをロード
const express = require("express");
const app = express();


//listenで待ち受け状態にする
 app.listen(3000, function(){
   console.log("Server started on port 3000");
 });

 // リクエストがあったら、index.htmlファイルをrespondする
app.get("/", function(req, res){

    // responseとして、fileをsendしますよ
    res.sendFile(__dirname + "/index.html");
  
  });