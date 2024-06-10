import { createContext, useContext, useReducer } from "react";

const NotesContext = createContext(null);

function NotesProvider({ children }) {
  const [notes, dispatch] = useReducer(notesReducer, []);
  return (
    <NotesContext.Provider value={{ notes, dispatch }}>
      {children}
    </NotesContext.Provider>
  );
}



export function useNote(){
    return (
         useContext(NotesContext);
    )
}