import React from 'react'
import { useState } from 'react';

export const AddLists = (props) => {
    const [list,setList]=useState('')
    const onUpadateList=(event)=>{
        setList(event.target.value)
    }
  return (
    <>
        <label>Add list</label>
        <input onChange={onUpadateList}></input>
        <button onClick={()=>{props.onSave(list)}}
        >Submit</button>
    </>
  )
}
