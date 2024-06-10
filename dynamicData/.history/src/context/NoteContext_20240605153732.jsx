import { createContext } from "react";

const UseContext = createContext(null);

function NoteProvider ({children}){
    <UseContext>{children}</UseContext>
}