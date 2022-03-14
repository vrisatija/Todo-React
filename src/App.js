import logo from './logo.svg';
import './App.css';
import {Lists} from './components/Lists'
import {AddLists} from './components/AddLists'
import { useState } from 'react';
import {List} from './components/List'
import {Task} from './components/Task'

function App() {
  const [page,setPage]=useState('lists');
  const mockListTemp=[
    {
      id:1,
      list: "Self Learning",
      tasks:[{
      title:'Walk'
      },{
          id:1,
          title:'learn'
      },{
        id:2,
          title:'eat'
      }]
    },
    {
      id:2,
      list: "Laundry",
      tasks:[{
      title:'Walk2'
      },{
          id:1,
          title:'learn2'
      },{
          id:2,
          title:'eat2'
      }]
    }
  ]
 /* const indexingData=(mockList)=>{//indexing is done so that when we return task we know which one is edited
    const indexingMockList={
     name:mockList.name,
     tasks: mockList.tasks.map((list,index)=>{
       return {
         title:list.title,
         id:index,
       }
     })
   }
   return indexingMockList
 }*/
  const [mockList,setmockList] =useState((mockListTemp))
  const onAdd=()=>{
    setPage('addList');
  }
  const onSave=(list)=>{
    console.log(list)
    const updateMockList={
      id: mockList.length+1,
      list: list,
      tasks:[]
    }
    setmockList([...mockList,updateMockList])
    console.log(mockList)
    setPage('lists')
  }
  const viewTasks=(eachList)=>{
      setPage('tasks')
      setmockList(eachList)
  }
  //const [listData, setListData]=useState((mockList))
  const [selectedTask,setSelectedTask]=useState()

  const onEdit=(eachTask)=>{
    console.log(eachTask)
    setPage('task')
    setSelectedTask(eachTask)
  }
  const onAddList=()=>{
    setPage('task2')
    setSelectedTask('')
  }
  const onSaveTasks=(taskItem)=>{
    console.log(taskItem.title)
    let f=0;
    const updateMockList={
      name: mockList.name,
      tasks: mockList.tasks.map((eachTask,index)=>{
        if(eachTask.id===taskItem.id){
          f=1;
          return taskItem 
        }else{
          return eachTask
        }
      }) 
    }
    if(f===0)
    updateMockList.tasks.push(taskItem)
    setmockList(updateMockList);
    setPage('tasks')
  }
  return (
    <div className="App">
      {page==='lists'?<Lists mockList={mockList} onAdd={onAdd} viewTasks={viewTasks}></Lists> : 
      page==='addList'?<AddLists onSave={onSave} ></AddLists>:
      page==='tasks'?<List listData={mockList} onClick={onEdit} addList={onAddList}/>:
      <Task selectedTask={selectedTask} onSave={onSaveTasks} page={page} listData={mockList}/>}
    </div>
  );
}

export default App;
