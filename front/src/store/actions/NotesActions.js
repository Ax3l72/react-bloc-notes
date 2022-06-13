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

export const postNotes = (data) => {
    return (dispatch) => {
        return api
            .post(`/notes`,{data})
            .then((res) => {
                console.log('postNotes', res.data)
                dispatch({ type: POST_NOTES, payload: res.data })
            })
            .catch((err) => console.log(err));
    }
}

export const putNotes = (id, data) => {
    return (dispatch) => {
        return api
            .put(`/notes/${id}`,{data})
            .then((res) => {
                console.log('putNotes', res.data)
                dispatch({ type: PUT_NOTES, payload: res.data })
            })
            .catch((err) => console.log(err));
    }
}

export const delNotes = (id) => {
    return (dispatch) => {
        return api
            .delete(`/notes/${id}`)
            .then((res) => {
                console.log('delNotes', res.data)
                dispatch({ type: DEL_NOTES, payload: res.data })
            })
            .catch((err) => console.log(err));
    }
}