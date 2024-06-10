import { createContext, useContext, useReducer } from "react";

const NotesContext = createContext(null);

const NotesContextDispatch = createContext(null);

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

export function useNotes() {
  return useContext(NotesContext);
}


export function useNotesDispatch(){
    return useContext(NotesContextDispatch)
}
