import React, { useState, useEffect } from "react";
import ListNote from "../components/ListNote";
import AddButton from "../components/AddButton";
import '../styles/NoteListPage.css'
import Pagination from '../components/PageNumber'
import API from '../ultis/API'


const TasksListPage = () => {
  const [notes, setNotes] = useState([]);
  const [page, setPage] = useState(1)
  const [totalPage, setTotalPage]= useState(null)
  const [noteCount, setNoteCount] = useState(null)


  useEffect(() => {
    getPageList();
  }, [page]);

  
  let handlePageChange = (newPage)=>{
    setPage(newPage)
  }
  
  let getPageList = async () => {
    try{
        let resp = await API.get(`notes/?page=${page}`);
        setNotes(resp.data.results)
        setTotalPage(resp.data.total_pages)
        setNoteCount(resp.data.count)
    }catch(error){
        console.log('PAGINATION ERROR>>>', error)
    }  
  };

  let searchNotes = async(value)=>{
    try{
      let resp = await API.get(`notes/?search=${value}`)
      console.log('SEARCH RESPONSE', resp.data)
      setNotes(resp.data.results)
      setTotalPage(resp.data.total_pages)
      setNoteCount(resp.data.count)
    }catch(error){
      console.log('SEARCH ERROR:',error)
    }
  }

  let handleSearchInputchange = (e)=>{
    e.preventDefault()
    searchNotes(e.target.value)
  }

  return (
    <div className="notes">
      <div className="notes-header">
        <h2 className="notes-title">&#9782; NOTES</h2>
        <p className="notes-count">{noteCount}</p>
      </div>
      <div id="search-input">
        <input  type="text" placeholder="Search" onChange={handleSearchInputchange}/>
      </div>
      <div className="notes-list">
        {notes.map((note) => (
          <ListNote key={note.id} note={note} />
        ))}
      </div>

      <Pagination
        totalPage={totalPage}
        page={page}
        handlePageChange={handlePageChange}
      />
      <AddButton />
    </div>
  );
};

export default TasksListPage;