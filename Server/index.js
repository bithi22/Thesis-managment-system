const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());


const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "shamik",
    database: "thesis"
});

app.post('/create_user',(req,res)=>{
    console.log("Server index.js")
    const username = req.body.username
    const password = req.body.password
    const email = req.body.email 
    const name = req.body.name

    db.query("INSERT INTO users (username, password, email, name) VALUES(?,?,?,?)",
    [username,password,email,name] , (err, result)=>{
        if(err)
        {
            console.log(err)
        }
        else
        {
            res.send("Values Inserted")
        }
    }
    );
});

app.post('/demo',(req,res)=>{
    console.log("Server index.js demo")
    const username = req.body.username
    const password = req.body.password

    db.query("SELECT * from users",
     (err, result)=>{
        if(err)
        {
            console.log(err)
        }
        else
        {
            res.send(result)
        }
    }
    );
});

app.post('/getApplied_Projects',(req,res)=>{
    console.log("Server index.js getAppliedProjects")

    db.query("SELECT * from users",
     (err, result)=>{
        if(err)
        {
            console.log(err)
        }
        else
        {
            res.send(result)
        }
    }
    );
});


app.post('/user_login',(req,res)=>{
    console.log("Server index.js for user login")
    const username = req.body.username
    const password = req.body.password

    console.log(username)
    console.log(password)

    db.query("SELECT username,password from users where username = BINARY ? and password = BINARY ?",
    [username,password] , (err, result)=>{
        if(err)
        {
            console.log(err)
        }
        else
        {
            console.log("User identified from database")
            console.log(result)
            res.send(result)
        }
    }
    );
});

app.post('/admin_login',(req,res)=>{
    console.log("Server index.js for admin login")
    const username = req.body.username
    const password = req.body.password

    console.log(username)
    console.log(password)

    db.query("SELECT username,password from admin where username = BINARY ? and password = BINARY ?",
    [username,password] , (err, result)=>{
        if(err)
        {
            console.log(err)
        }
        else
        {
            console.log("Admin identified from database")
            console.log(result)
            res.send(result)
        }
    }
    );
});


app.listen(3001,() => {
    console.log("App Running")
})