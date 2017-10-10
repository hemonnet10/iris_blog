var appRouter = function(app,database) {
	
app.get("/", function(req, res) {
    res.send("Node Server is running...");
});

app.get("/articles", function(req, res) {

 database.collection("article").find({}).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
	 database.close();
	return res.send(result);
   
  });


});
}

module.exports = appRouter;