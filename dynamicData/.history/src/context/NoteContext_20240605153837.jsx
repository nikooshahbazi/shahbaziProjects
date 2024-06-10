import { createContext, useReducer } from "react";

const UseContext = createContext(null);

function NotesProvider ({children}){
    const [notes, dispatch] = useReducer(notesReducer, []);
    <UseContext.Provider value={{notes , dispatch}}>{children}</UseContext.Provider>
}