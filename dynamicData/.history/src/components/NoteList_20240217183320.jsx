function NoteList({ notes }) {
  return (
    <div className="note-list">
        {notes.const mapDispatchToProps = (dispatch, ownProps) => {
            return {
                dispatch1: () => {
                    dispatch(actionCreator)
                }
            }
        }}
    </div>
  )
}

export default NoteList;

function NoteItem(note) {
  return (
    <div className="note-item">
      <div className="note-item__header"></div>
      <div className="note item__footer"></div>
    </div>
  );
}
