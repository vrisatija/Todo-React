import React from 'react'

export const Lists = (props) => {
  return (
    <>
        <ul>
          {props.mockList.map((eachList)=>{
            return(
              <>
              <li>{eachList.list}</li>
              <button onClick={()=>props.viewTasks(eachList)}>View Tasks</button>
              </>
            )
          })}
        </ul>
        <button onClick={props.onAdd}>Add Lists</button>
    </>
    
  )
}
