import React from 'react'
import "./footer.css"

export default function Footer({all,completed,onClear,ShowComp,status,ShowAll}) {
  return (
    <div id='footer'>
        <label>
            Completed {completed}/{all}
        </label>
            <button id='clearbtn' onClick={onClear}>Clear Completed</button>
    </div>
  )
}
