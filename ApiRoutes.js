var port = process.env.PORT ||3000,
    express = require("express"),
    request=require("request"),
    app=express();
app.set("view engine", "ejs");

var quantity={
    url:"http://api.com/quantity",
    headers: {
        'Identifier': identifier
    }
};
var operation={
    url:"http://api.com/operation",
    headers: {
        'Identifier': identifier
    }
};
app.post("/", function(req,res){
    function callback(error,response,body){
        if(!error && response.statusCode == 200){
            var data = JSON.parse(body);
            res.render("index", {data: data});
        
        }
    }
    request(operation, callback);
});
app.listen(port, function(){
  console.log(`Running on port{PORT}`);
})