import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getNotes, postNotes, putNotes, delNotes } from "../store/actions/NotesActions";
import { store } from "../store";

import { Card, Input, Button, Row, Col, Typography } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';

export default function Home() {
    const dataD = useSelector((state) => state.notes.data);
    const dispatch = useDispatch();

    const { Title } = Typography;
    const { Meta } = Card;
    const FontIcons = "32px"
    
    async function addNotes() {
        const input = document.getElementById("notes").value;
        if (input.length > 0) {
            await store.dispatch(postNotes(input));
            await store.dispatch(getNotes());
            // document.getElementById("notes").value = "";
            // document.getElementById("notes").focus();
        }
    }
    
    async function editNotes(id) {
        const input = document.getElementById(`notes_edit-` + id).value;
        if (input.length > 0) {
            await store.dispatch(putNotes(id, input));
            await store.dispatch(getNotes());
            // document.getElementById(`notes_edit-` + id).value = "";
        }
    }

    async function deleteNotes(value) {
        await store.dispatch(delNotes(value));
        await store.dispatch(getNotes());
    }

    useEffect(() => {
        store.dispatch(getNotes());
    }, [dispatch]);

    return (
        <div>
            <Title level={3}>All data get</Title>
            <Row>
                <Col span={12} offset={6}>
                    {dataD.data && dataD.data.map((el, index) => {
                        console.log(el._id)
                        return (
                            <div key={index}>
                                <Card
                                    style={{ marginTop: 20 }}
                                    actions={[
                                        <EditOutlined style={{ fontSize: FontIcons, }}  key="edit" onClick={() => editNotes(el._id)} />,
                                        <DeleteOutlined style={{ fontSize: FontIcons, }}  key="del" onClick={() => deleteNotes(el._id)} />,
                                    ]}
                                >
                                    <Meta
                                        title={el.title}
                                        description={<Input maxLength="16" id={'notes_edit-' + el._id} placeholder='Edit...' />}
                                    />
                                </Card>
                            </div>
                        )
                    })}
                </Col>
            </Row>

            <Title 
                style={{ marginTop: 100 }}
                level={3}>
                    Add something
            </Title>
            
            <Row>
                <Col span={12} offset={6}>
                    <Input maxLength="16" id="notes" type="text" name="notes_add" placeholder='Add title' />
                    <Button onClick={(e) => addNotes(e)} type="primary">Add</Button>
                </Col>
            </Row>
        </div>
    )
}