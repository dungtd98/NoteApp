import React from 'react'
import { Link } from 'react-router-dom'


let getTime =  (note)=>{
  return new Date(note.updated).toLocaleDateString()
}

let getTitle = (note)=>{
  let title = note.body.split('\n')[0]
  if(title.length>45){
    return title.slice(0,45)
  }
  return title
}

let getContent = (note)=>{
  let title = getTitle(note)
  let body = note.body.replaceAll('\n','')
  body = body.replaceAll(title,'')
  
  if(body.length>45){
    return body.slice(0,45)+'...'
  } else{
    return body
  }
}


const ListNote = ({note}) => {
  return (
    <Link to={`/note/${note.id}/`}>
      <div className="notes-list-item">
        <div className="todo-note">{getTitle(note)}</div>
        <p>{getTime(note)} <span>{getContent(note)}</span></p>
      </div> 
    </Link>
  )
}

export default ListNote