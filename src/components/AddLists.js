import React, { useState } from 'react';

export function AddLists(props) {
  const [list, setList] = useState('');
  const onUpadateList = (event) => {
    setList(event.target.value);
  };
  return (
    <>
      <label>Add list</label>
      <input onChange={onUpadateList} />
      <button onClick={() => { props.onSave(list); }}>
        Submit
      </button>
    </>
  );
}
