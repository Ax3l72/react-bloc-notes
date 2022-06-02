import { useEffect } from "react";
import { useSelector } from "react-redux";

import { getNotes, postNotes, putNotes, delNotes } from "../store/actions/NotesActions";
import { store } from "../store";

import { Message, Input, Button } from 'semantic-ui-react'

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

    function editNotes(id) {
        const input = document.getElementById(`notes_edit-` + id).value;
        if (input.length > 0) {
            store.dispatch(putNotes(id, input));
            store.dispatch(getNotes());
            document.getElementById(`notes_edit-` + id).value = "";
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
                        <Message
                            header={el.title}
                            content={<div>
                                        <Input id={'notes_edit-' + el.id} placeholder='Edit...' />
                                        <Button 
                                            color='orange'
                                            icon='edit outline' 
                                            onClick={() => editNotes(el.id)}
                                            />
                                        <Button 
                                            color='red'
                                            icon='trash' 
                                            onClick={() => deleteNotes(el.id)}
                                            />
                                    </div>}
                        />
                        <br />
                        <br />
                    </div>
                )
            })}
            <h2>POST</h2>
            <label>Your notes:</label><br />
            <Input maxLength="16" id="notes" type="text" name="notes_add" placeholder='Add title' />
            <Button 
                color='green'
                icon='add' 
                onClick={(e) => addNotes(e)}
                />

        </div>
    )
}