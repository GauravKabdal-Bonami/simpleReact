import React, { useState, useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "add todo": {
      return [...state, action.todo];
    }
    case "delete todo": {
      const newList = state.filter((item) => item.id !== action.todo.id);
      return newList;
    }
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, []);
  console.log(state);

  const [name, setName] = useState({});

  const handleChange = (e) => {
    const { value } = e.target;
    setName({ ...name, id: Date.now(), todoName: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "add todo", todo: name });
  };

  const handleDelete = (e, singleTodo) => {
    e.preventDefault();
    dispatch({ type: "delete todo", todo: singleTodo });
  };

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <form onSubmit={(e) => handleSubmit(e)}>
        <input type="text" onChange={handleChange} />
        <button>Add</button>
        {state.length
          ? state.map((singleTodo) => (
              <div key={singleTodo.id}>
                <h1>{singleTodo.todoName}</h1>
                <button onClick={(e) => handleDelete(e, singleTodo)}>
                  Delete
                </button>
              </div>
            ))
          : null}
      </form>
    </div>
  );
}

export default App;
