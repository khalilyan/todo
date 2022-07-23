import "./item.css"
import React from 'react'

export default function Item({title,onDelete,isCompleted,onChange,todo}) {
  return (
    <div id="container">
        <label className="item">
        <input id="checkbox" type="checkbox"  checked={isCompleted} onChange={(e)=>{
            onChange({
                ...todo,
                isCompleted: e.target.checked
            })
        }}/>
        {title}
        <button id="Xbtn" onClick={onDelete}>X</button>
        </label>
    </div>
  )
}
