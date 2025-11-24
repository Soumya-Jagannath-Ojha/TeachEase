import React from 'react'
import { Link } from 'react-router-dom'

const ListIterator = ({list}) => {
  return (
    <>
    {
        list.map((ele,idx)=>{
            return <li key={idx+1} className='hover:text-amber-500'><Link to={ele}>{ele}</Link></li>
        })
    }
    </>
  )
}

export default ListIterator