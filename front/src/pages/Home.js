import { useEffect } from "react";
import { useSelector } from "react-redux";

import { getNotes, postNotes, putNotes, delNotes } from "../store/actions/NotesActions";
import { store } from "../store";

// import { Message, Input, Button } from 'semantic-ui-react'
import { Card, Input, Button } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';

export default function Home() {
    const data = useSelector((state) => state.notes.data);
    const { Meta } = Card;

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
                        <Card
                            style={{ width: 300, marginTop: 16 }}
                            actions={[
                                <EditOutlined key="edit" onClick={() => editNotes(el.id)}/>,
                                <DeleteOutlined key="del" onClick={() => deleteNotes(el.id)}/>,
                            ]}
                        >
                            <Meta
                                title={el.title}
                                description={<Input maxLength="16" id={'notes_edit-' + el.id} placeholder='Edit...' />}
                            />

                        </Card>
                    </div>
                )
            })}
            <h2>POST</h2>
            <label>Your notes:</label><br />
            <Input maxLength="16" id="notes" type="text" name="notes_add" placeholder='Add title' />
            <Button onClick={(e) => addNotes(e)} type="primary">Add</Button>

        </div>
    )
}