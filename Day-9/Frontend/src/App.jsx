import { useEffect, useState } from "react";
import axios from "axios"

function App() {
  const [notes, setNotes] = useState([])

  // console.log("Hello Integration");

  function fetchNotes(){
axios.get("http://localhost:3000/api/notes")//ye line backend ke api pe hit karegi aur api jo bhi data return karegi wo ayega (res.data)
      .then(res => {
        // console.log(res.data.notes)
        setNotes(res.data.notes)//jo data ayega wo setNotes ke andar save kar lenge
      })
  }

  useEffect(() => {//Ye function ko bas ek bar chalayega, App ko bas ek hi bar render karega
    fetchNotes()
  },[])

    function handleSubmit(e){
      e.preventDefault()

      const {title,description} = e.target.elements//title aur description input field se aya hai jo name= "title", name="description" likhe hai

      console.log(title.value, description.value );
      axios.post("http://localhost:3000/api/notes",{
        title: title.value,
        description: description.value
      })
      .then(res=>{
        console.log(res.data);

        fetchNotes()//note ko render karwa dega
        
      })
      
    }

    function handleDeleteNote(noteId){
      axios.delete("http://localhost:3000/api/notes/"+noteId)
      .then(res=>{
        console.log(res.data)
        fetchNotes()
      })
      
    }


  return (
    <>

    <form className="note-create-form" onSubmit={handleSubmit}>
      <input name="title" type="text" placeholder="Enter title" />
      <input name="description" type="text" placeholder="Enter description" />
      <button>Create Note</button>
    </form>
      <div className="notes">
        {
          notes.map(note => {
            return <  div className="note" >
              <h1>{note.title}</h1>
              <p>{note.description}</p>
              <button onClick={()=>{handleDeleteNote(note._id)}}>delete</button>
            </div>
          })
        }

      </div>
    </>
  )
}

export default App;
