import React from 'react'
import { Link } from 'react-router-dom'

const DashboardListIterator = ({list}) => {
  return ( 
 
    <>
    {
        list.map((ele,idx)=>{
            return <Link to={ele} key={idx+1} className='hover:bg-amber-300 hover:text-black text-lg font-semibold   rounded-lg p-2 text-white'>{ele}</Link>
        })
    }
    </>
  )
}

export default DashboardListIterator