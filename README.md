# iris_blog
1. Install mongodb 
2. Install node
3. create a folder in local with name code
4. check out project from git
5. inside code floder from cmd run cammand- npm install

Now to start mongo db
1. create folder in e or f drive wherever you want as data
2. use this command to run mongo 
mongod --dbpath F:\data --port 27017
if it says mongo command is not available. first install mongo
3. To create db schema
   create database as iris_blog
   import json files from floder db_files to iris_blog schema
   
To run node server use below command
node app.js

To test get api
http://localhost:3000/getArticles
To test save api

http://localhost:3000/saveArticle
Methode-POST
Content-Type:application/json
Sample JSON

{
"category":"saveTestcat1",
"subject":"saveTestsub1",
"content":"saveTestcontent1",
"author":"saveTestaut1",
"comments":[{"personName":"saveTestTestUser","id":"saveTestper123","comment":"saveTest Nice written comment"}],
"vote":9
}


  