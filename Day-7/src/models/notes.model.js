const mongoose = require("mongoose")

const noteSchema = new mongoose.Schema({
    title: String,
    description: String,
})

const noteModel = mongoose.model("notes", noteSchema)
// mongoose.model("notes", noteSchema)// ek model create karegi aur isko ham ek variable me save karenge

module.exports = noteModel