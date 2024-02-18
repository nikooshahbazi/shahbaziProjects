function AddNewNote() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  };

  return (
    <div className="add-new-note">
      <h2>Add new Note</h2>
      <form className="note-form" onSubmit={handleSubmit}>
        <input type="text" className="text-field" placeholder="note Title"></input>
        <input type="text" className="text-field"></input>
        <button className="btn btn--primary" type="submit">Add New Note</button>
      </form>
    </div>
  );
}

export default AddNewNote;
