const express = require('express');
const mysql = require('mysql');

//Create connection
const db = mysql.createConnection({
    host: 'localhost',
    user:'root',
    password: 'root',
    database:'conso_crf'
});


//connection

db.connect((err) => {
    if(err){
      throw err;  
    }
    console.log('Mysql connected !!');
});
const app = express();

//insert user
app.get("/adduser1",(req,res) => {
    let user = {firstname: 'Robert', lastname : 'Dupont'}
    let sql = "INSERT INTO users SET ?";
    let query = db.query(sql,user, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send("User inserted");
    });
});

//select users
app.get("/getusers",(req,res) => {    
    let sql = "SELECT * FROM users";
    let query = db.query(sql, (err, results) => {
        if(err) throw err;
        console.log(results);
        res.send("Users fetched");
    });
});

app.listen('3000', () => {
    console.log("Server started on port 3000");

});