import { api } from '../../config/axios.js'
import { GET_NOTES_DATA, POST_NOTES, PUT_NOTES, DEL_NOTES } from './ActionTypes'

export const getNotes = () => {
    return (dispatch) => {
        return api
            .get(`/notes`)
            .then((res) => {
                console.log('getNotes', res.data)
                dispatch({ type: GET_NOTES_DATA, payload: res.data })
            })
            .catch((err) => console.log(err));
    }
}

export const postNotes = (value) => {
    return (dispatch) => {
        return api
            .post(`/notes`,{data:value})
            .then((res) => {
                console.log('postNotes', res.data)
                dispatch({ type: POST_NOTES, payload: res.data })
            })
            .catch((err) => console.log(err));
    }
}

export const putNotes = (value1, value2) => {
    return (dispatch) => {
        return api
            .put(`/notes`,{data:value1,data_edit:value2})
            .then((res) => {
                console.log('putNotes', res.data)
                dispatch({ type: PUT_NOTES, payload: res.data })
            })
            .catch((err) => console.log(err));
    }
}

export const delNotes = (value1) => {
    return (dispatch) => {
        return api
            .delete(`/notes`,{data:{data_del:value1}})
            .then((res) => {
                console.log('delNotes', res.data)
                dispatch({ type: DEL_NOTES, payload: res.data })
            })
            .catch((err) => console.log(err));
    }
}