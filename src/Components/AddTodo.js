import React, { useState } from "react";

const AddTodo = ({ addTodo }) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const submit = (e) => {
    e.preventDefault(); //page will not reload
    if (!title || !desc) {
      alert("Title or Description cannot be blank");
    } else {
      addTodo(title, desc);
      setTitle("");
      setDesc("");
    }
  };
  return (
    <div className="container my-3">
      <h1>Add a Todo</h1>
      <form onSubmit={submit}>
        <div className="mb-3 form-group">
          <label htmlFor="title">Todo Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            aria-describedby="emailHelp"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-3 form-group">
          <label htmlFor="desc">Todo Description</label>
          <input
            type="text"
            className="form-control"
            id="desc"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-success">
          Add Todo
        </button>
      </form>
    </div>
  );
};

export default AddTodo;
