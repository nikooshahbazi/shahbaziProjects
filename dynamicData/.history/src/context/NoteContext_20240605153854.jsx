import { createContext, useReducer } from "react";

const NotesContext = createContext(null);

function NotesProvider ({children}){
    const [notes, dispatch] = useReducer(notesReducer, []);
    <NotesContext.Provider value={{notes , dispatch}}>{children}</NotesContext.Provider>
}