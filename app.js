const express = require('express');
const mysql = require('mysql');

//Create connection
const db = mysql.createConnection({
    host: 'localhost',
    user:'root',
    password: '',
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

//insert user1
app.get("/adduser1",(req,res) => {
    let user = {firstname: 'Robert', lastname : 'Dupont'}
    let sql = "INSERT INTO users SET ?";
    let query = db.query(sql,user, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send("User inserted");
    });
});


//insert user2
app.get("/adduser2",(req,res) => {
    let user = {firstname: 'Yann', lastname : 'Underwood'}
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
        //res.send("Users fetched");
        res.send(results);
    });
});

//select single user
app.get("/getuser/:id",(req,res) => {    
    let sql = `SELECT * FROM users WHERE id = ${req.params.id}`;
    let query = db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        //res.send("Users fetched");
        res.send(result);
    });
});

app.listen('3000', () => {
    console.log("Server started on port 3000");

});