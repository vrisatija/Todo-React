import React, { useState } from 'react';

export function List(props) {
  const [listData, setListData] = useState(props.mockList);

  return (
    <>
      <div>ListDetails</div>
      <ul>
        {props.listData.tasks.map((eachTask) => (
          <>
            <li key={eachTask.id}>
              {' '}
              {eachTask.title}
            </li>
            <button onClick={(task) => props.onClick({ title: eachTask.title, id: eachTask.id })}>edit</button>
          </>

        ))}
        <button onClick={() => props.addList()}>Add Task</button>
      </ul>
    </>

  );
}
