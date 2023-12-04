import express from "express";
import path from "path";

const app = express();

// poora folder ko detect krwana ka liye 
app.use(express.static(path.join(path.resolve(), "public")))

// Setting Up View Engine
// app.set("view engine", "ejs");
// app.get("/getproducts",(req,res) => {
    // res.json({
    //     success : true,
    //     products : [],
    // });
    // res.status(400).send("Meri Marzi");
    app.get("/" , (req,res) => {
        const pathlocation = path.resolve();

        // res.sendFile("index");
        // res.sendFile(path.join(pathlocation, "./index.html"));
        res.render("index", {name: "Hamza Malik"});
    })

app.listen(5000,() => {
    console.log("server is working");
});