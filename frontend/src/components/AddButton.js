import React from 'react'
import { ReactComponent as AddIcon } from '../assets/Add.svg'
import { Link } from 'react-router-dom'
const AddButton = () => {
  return (
    <Link to={`/note/new`} className='floating-button'>
        <AddIcon/>
    </Link>

  )
}

export default AddButton