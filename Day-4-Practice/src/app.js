const express = require("express")

const app = express()//server ka instance create kiya

const notes = []

app.use(express.json())//Middleware hai taki value aake store ho sake notes array me

app.get("/",(req, res)=>{
    res.send("Hello from the Day-4-Practice");
})


//niche wale api se ham notes me kuch bhi likh sakte hai aur notes name ke array me store kar sakte h
app.post("/notes", (req, res)=>{
    console.log(req.body)//req.body me jo notes ayega wo show hoga
    res.send("Note created")
    notes.push(req.body)//notes array me req.body ka valure store hoga
    console.log(notes);//notes array ki value ko print karega
    
})


//get se ham value ko dekh sakte h
app.get("/notes", (req, res)=>{
    res.send(notes)//isse notes wale array ka value print hoga 
})

//delete api kaise kam karta hai wo dekhenge 
app.delete("/notes/:index",(req, res)=>{//notes/:index se dynamic ho jayega aur ham jaha ka value delete karna chahenge delete ho jayega
    delete notes[ req.params.index]//(req.params.index me jo value ayega wha se wo delete ho jayega)

    res.send("Note deleted successfully")
})


app.patch("/notes/:index",(req, res)=>{
    notes[req.params.index].description = req.body.description
    res.send("Note updated successfully")
})


module.exports = app