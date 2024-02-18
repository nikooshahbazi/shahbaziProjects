import { useState } from "react";

function AddNewNote() {
  const [title, setTitle] = useState("");
  const [description, setDiscription] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const newNote = {
      // ==> for give new Data
      title,
      description,
      id: Date.now(),
      completed: false,
      createdAt: new Date().toISOString(),
    };

    setTitle("")
    console.log(newNote);
  };

  return (
    <div className="add-new-note">
      <h2>Add new Note</h2>
      <form className="note-form" onSubmit={handleSubmit}>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          className="text-field"
          placeholder="note Title"
        ></input>
        <input
          value={description}
          onChange={(e) => setDiscription(e.target.value)}
          type="text"
          className="text-field"
          placeholder="note Description"
        ></input>
        <button className="btn btn--primary" type="submit">
          Add New Note
        </button>
      </form>
    </div>
  );
}

export default AddNewNote;
