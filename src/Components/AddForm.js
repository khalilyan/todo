import React from 'react'
import "./addform.css"

import { useState } from 'react'
export default function AddForm({title,onAdd}) {
    const [val, setVal] = useState("")
    const [type, setType] = useState(0)
  return (
    <div id='addform'> 
        <form   onSubmit={(e)=>{
            e.preventDefault()
            onAdd(val)
            setVal("")
        }}>
        <input id='input' maxLength={30}  placeholder='Add any Todo...' type="text" value={val} onChange={(e)=>{
          setVal(e.target.value)
          setType(e.target.value.length)
          }}/>
        <button id='btn' >Add</button>
        <label id='type'>{type}/30</label>
        </form>
    </div>
  )
}
