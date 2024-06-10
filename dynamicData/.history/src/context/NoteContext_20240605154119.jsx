import { createContext, useContext, useReducer } from "react";

const NotesContext = createContext(null);

const NotesContextDispatch = createContext(null)

function NotesProvider({ children }) {
  const [notes, dispatch] = useReducer(notesReducer, []);
  return (
    <NotesContext.Provider value={{ notes, dispatch }}>
      {children}
    </NotesContext.Provider>
     <NotesContextDispatch.Provider value={{ notes, dispatch }}>
     {children}
   </NotesContextDispatch.Provider>
  );
}

export function useNotes() {
  return useContext(NotesContext);
}
