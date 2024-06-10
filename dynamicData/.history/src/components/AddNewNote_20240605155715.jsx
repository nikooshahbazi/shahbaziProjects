import { useContext, useState } from "react";

function AddNewNote() {
  const dispatchNotes = useContext();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !description) return null;

    const newNote = {
      title,
      description,
      id: Date.now(),
      completed: false,
      createdAt: new Date().toISOString(),
    };
    dispatch({ type: "AddNewNote", payload: newNote });
    setTitle("");
    setDescription("");
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
          onChange={(e) => setDescription(e.target.value)}
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
