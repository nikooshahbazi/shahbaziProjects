import { useState } from "react";

function AddNewNote() {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    
  };
  const handleChange = (e) => {
    setTitle(e.target.value); // ==> for save in input and setState
  };

  return (
    <div className="add-new-note">
      <h2>Add new Note</h2>
      <form className="note-form" onSubmit={(e) => }>
        <input
          value={title}
          onChange={handleChange}
          type="text"
          className="text-field"
          placeholder="note Title"
        ></input>
        <input
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
