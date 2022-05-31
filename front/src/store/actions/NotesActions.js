import { api } from '../../config/axios.js'
import { GET_NOTES_DATA, POST_NOTES } from './ActionTypes'

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
            .post(`/notes`,{note_add:value})
            .then((res) => {
                console.log('getNotes', res.data)
                dispatch({ type: POST_NOTES, payload: res.data })
            })
            .catch((err) => console.log(err));
    }
}