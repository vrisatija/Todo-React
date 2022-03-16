import React from 'react';

export function Lists(props) {
  return (
    <>
      <ul>
        {props.mockList.map((eachList) => (
          <>
            <li>{eachList.list}</li>
            <button onClick={() => props.viewTasks(eachList)}>View Tasks</button>
          </>
        ))}
      </ul>
      <button onClick={props.onAdd}>Add Lists</button>
    </>

  );
}
