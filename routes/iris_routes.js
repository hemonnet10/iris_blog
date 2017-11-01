var appRouter = function(app,database) {
	
app.get("/", function(req, res) {
    res.send("Node Server is running..."+req);
});
app.post("/t", function(req, res) {
    res.send(req.body);
});

app.get("/getArticles", function(req, res) {

 database.collection("article").find({}).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
	 database.close();
	return res.send(result);
   
  });


});

app.post("/saveArticle", function(req, res) {
var article=req.body;
console.log("req="+req.body);
 console.log("req="+JSON.stringify(req.body));
 database.collection("article").insertOne(article, function(err, result) {
    console.log("Inserted a document into the article collection.");
	if (err) throw err;
    return res.send(req.body);
  });


});

}

module.exports = appRouter;