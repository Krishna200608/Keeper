import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

export const NotesContext = createContext();

export const NotesContextProvider = (props) => {

    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    const [fetchedNotes, setFetchedNotes] = useState([]);

    //console.log(backendUrl);

    const fetchNote = async () => {
        try {
            const {data} = await axios.get(backendUrl + '/api/notes');

            //console.log(data.notes);

            data.success ? setFetchedNotes(data.notes) : toast.error("Error fetching the Notes");


        } catch (error) {
            console.log(error);
            toast.error(error.message)
        }
    }

    useEffect(()=>{
        fetchNote();
    },[])

    const value = {
        backendUrl, fetchedNotes, fetchNote
    }

    return (
        <NotesContext.Provider value={value}>
            {props.children}
        </NotesContext.Provider>
    )
}