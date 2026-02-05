/* 
    server ko create karna
*/

const express = require("express")
const noteModel = require("./models/note.model")


const app = express()
app.use(express.json()) //middleware hai jiski help se req.body me data ayega

/*
    Post /api/notes
    -create new note and save data in mongodb
    -req.body = { title, description }
 */

app.post("/api/notes", async(req, res)=>{
    const { title, description } = req.body //isko destructuring karna bolte hai

    const note = await noteModel.create({
        title, description
    })
    res.status(201).json({
        meassage: "note created successfully",
        note
    })
})

/*
    -Get /api/notes
    -fetch all the notes data from mongoDB and send them in the response
 */
app.get("/api/notes", async (req, res)=>{
    const notes  = await noteModel.find()//ye hamesa array return karegi aur data format array of objects hoga
    res.status(200).json({
        messsage: "Notes fetched successfully",
        notes 
    })
})

/*
    Delete /api/notes/:id
    Delete note with the id from  req.params
 */
app.delete("/api/notes/:id", async (req, res) =>{
    const id = req.params.id 
    console.log(id)

    await noteModel.findByIdAndDelete(id)

    res.status(200).json({
        message: "Note Deleted successfully"
    })
})

/*
-   Patch /api/notes/:id
    -update the description of the  note
    req.body = { description }
 */
app.patch("/api/notes/:id", async (req, res) =>{
    const id = req.params.id
    const { description } = req.body

    await noteModel.findByIdAndUpdate(id, { description  })

    res.status(200).json({
        message: "Note updated successfully"
    })
})

module.exports = app