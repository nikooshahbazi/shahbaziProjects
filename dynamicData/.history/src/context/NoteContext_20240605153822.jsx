import { createContext } from "react";

const UseContext = createContext(null);

function NoteProvider ({children}){
    const [notes, dispatch] = useReducer(notesReducer, []);
    <UseContext.Provider value={{notes , dispatch}}>{children}</UseContext.Provider>
}