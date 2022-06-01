import { useEffect } from "react";
import { useSelector } from "react-redux";

import { getNotes, postNotes, putNotes, delNotes } from "../store/actions/NotesActions";
import { store } from "../store";

export default function Home() {
    const data = useSelector((state) => state.notes.data);

    function addNotes() {
        const input = document.getElementById("notes").value;
        if (input.length > 0) {
            store.dispatch(postNotes(input));
            store.dispatch(getNotes());
            document.getElementById("notes").value = "";
            document.getElementById("notes").focus();
        }
    }

    function editNotes(value,index) {
        const input = document.getElementById(`notes_edit-`+index).value;
        if (input.length > 0) {
            store.dispatch(putNotes(value,input));
            store.dispatch(getNotes());
            document.getElementById(`notes_edit-`+index).value = "";
        }
    }

    function deleteNotes(value) {
            store.dispatch(delNotes(value));
            store.dispatch(getNotes());
    }

    useEffect(() => {
        store.dispatch(getNotes());
    }, []);

    return (
        <div>
            <h2>GET</h2>
            {data.users && data.users.map((el, index) => {
                return (
                    <div key={index}>
                        <p>{el.username} - {index}</p> 
                        <input maxLength="16" id={'notes_edit-'+index} type="text" name="notes_edit" />
                        <button onClick={() => editNotes(el.username, index)} >EDIT</button>
                        <button onClick={() => deleteNotes(el.username)} >DELETE</button>
                        <br/>
                        <br/>
                        <br/>
                    </div>
                )
            })}
            <h2>POST</h2>
            <label>Your notes:</label><br />
            <input maxLength="16" id="notes" type="text" name="notes_add" /><br /><br />
            <button onClick={(e) => addNotes(e)} >Submit</button>

        </div>
    )
}