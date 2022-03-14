import logo from './logo.svg';
import './App.css';
import {Lists} from './components/Lists'
import {AddLists} from './components/AddLists'
import { useState } from 'react';
import {List} from './components/List'

function App() {
  const [page,setPage]=useState('lists');
  const mockListTemp=[
    {
      id:1,
      list: "Self Learning",
      tasks:[{
      title:'Walk'
      },{
          title:'learn'
      },{
          title:'eat'
      }]
    },
    {
      id:2,
      list: "Laundry",
      tasks:[{
      title:'Walk'
      },{
          title:'learn'
      },{
          title:'eat'
      }]
    }
  ]
  const [mockList,setmockList] =useState(mockListTemp)
  const onAdd=()=>{
    setPage('addList');
  }
  const onSave=(list)=>{
    console.log(list)
    const updateMockList={
      id: mockList.length+1,
      list: list
    }
    setmockList([...mockList,updateMockList])
    console.log(mockList)
    setPage('lists')
  }
  const viewTasks=(eachList)=>{
      setPage('tasks')

  }
  
  return (
    <div className="App">
      {page==='lists'?<Lists mockList={mockList} onAdd={onAdd} viewTasks={viewTasks}></Lists> : 
      page==='addList'?<AddLists onSave={onSave} ></AddLists>:
      // page=='tasks'?<List listData={listData} onClick={onEdit} addList={onAddList}/>:
      <></>}
    </div>
  );
}

export default App;
