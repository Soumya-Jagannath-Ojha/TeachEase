import React from 'react'
import ListIterator from '../../utils/ListIterator'

const Navlist = () => {

    const navlist = ["about","contact","resources"];

  return (
    <>
        <ListIterator list={navlist}/>
    
    </>
  )
}

export default Navlist