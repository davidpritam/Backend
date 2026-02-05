const mongoose = require("mongoose")

// Creating Schema /Format of data ki kaise store hoga database me
const noteSchema = new mongoose.Schema({
    title: String,
    description: String,
})


//Model create kar rhe h tabhi ham database me note se related koi bhi operation kar sakte h jaise ki (Create note, Read note, Update note, Delete note)

const noteModel = mongoose.model("notes", noteSchema)//isi note model ki help se ham sare CRUD operation perform karne wale hai

module.exports = noteModel