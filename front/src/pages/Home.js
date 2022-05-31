import { useEffect } from "react";
import { useSelector } from "react-redux";

import { getNotes, postNotes } from "../store/actions/NotesActions";
import { store } from "../store";

export default function Home() {
    const notes = false
    const data = useSelector((state) => state.notes.data);
    function addNotes() {
        var input = document.getElementById("notes").value;
        if (input.length > 0) {
            store.dispatch(postNotes(input));
            store.dispatch(getNotes());
            input.value = ""
        }
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
                        <p>{el.username}</p>
                    </div>
                )
            })}
            <h2>POST</h2>
            <label>Your notes:</label><br />
            <input id="notes" type="text" name="notes_add" /><br /><br />
            <button onClick={(e) => addNotes(e)} >Submit</button>

        </div>
    )
}