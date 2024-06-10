import { createContext } from "react";

const UseContext = createContext(null);

function NoteProvider ({children}){
    const [notes, dispatch] = useReducer(notesReducer, []);
    <UseContext.Provider value={{}}>{children}</UseContext.Provider>
}