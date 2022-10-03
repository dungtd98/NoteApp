import React, { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ReactComponent as LeftArrow } from "../assets/LeftArrow.svg";
import AuthContext from '../context/AuthContext'
import API from '../ultis/API'
import '../styles/NotePage.css'
const NotePage = () => {
  const { noteID } = useParams();
  const [note, setNote] = useState(null);
  const {user} = useContext(AuthContext)
  const history = useNavigate();
  useEffect(() => {
    getNote();
  }, []);

  let getNote = async () => {
    if (noteID === "new") return;
    try{
      let resp = await API.get(`note/${noteID}/`)
      setNote(resp.data)
    }catch(error){
      console.log(error)
    }
  };

  const updateNote = async () => {
    await API.put(`note/${noteID}/`,{
      user:note.user,
      body:note.body
    })
  };

  const deleteNote = async () => {
    await API.delete(`note/${noteID}/`)

  };

  const createNote = async ()=>{
    await API.post(`notes/`,{
      user:user.user_id,
      body:note.body
    })
  }
  const handleSubmit = () => {
    if (noteID !== "new" && note.body !== "") {
      updateNote();
    } else if (noteID !== "new" && note.body === "") {
      deleteNote();
    } else if (noteID === "new" && note.body !== null) {
      createNote();
    }
    history(`/`);
  };

  const handleChange = (value) => {
    setNote((note) => ({ ...note, body: value }));
    
  };
  return (
    <div className="note">
      <div className="note-header">
        <h3>
          <LeftArrow onClick={handleSubmit} />
        </h3>
        {/* {noteID !== "new" ? (
          <button onClick={deleteTask}>Delete</button>
        ) : (
          <button onClick={handleSubmit}>Done</button>
        )} */}
      </div>
      <textarea
        onChange={(e) => {
          handleChange(e.target.value);
        }}
        value={note?.body}
      ></textarea>
    </div>
  );
};

export default NotePage;