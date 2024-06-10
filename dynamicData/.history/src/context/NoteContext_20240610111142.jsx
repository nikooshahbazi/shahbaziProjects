import { createContext, useContext, useReducer } from "react";

const notesContext = createContext(null);
const NotesContextDispatch = createContext(null);
function notesReducer(state, action) {
  switch (action.type) {
    case "AddNewNote": {
      return [...state, action.payload];
    }
    case "DeleteNote": {
      return state.filter((s) => s.id !== action.payload);
    }
    case "CompletedNote": {
      return state.map((note) =>
        note.id === action.payload
          ? { ...note, completed: !note.completed }
          : note
      );
    }
    default:
      throw new Error("unknown Error" + action.type);
  }
} 

function NotesProvider({ children }) {
  const [notes, dispatch] = useReducer(notesReducer, []);
  return (
    <NotesContext.Provider value={notes}>
      <NotesContextDispatch.Provider value={dispatch}>
        {children}
      </NotesContextDispatch.Provider>
    </NotesContext.Provider>
  );
}
export default NotesProvider;

export function useNotes() {
  return useContext(NotesContext);
}

export function useNotesDispatch() {
  return useContext(NotesContextDispatch);
}
