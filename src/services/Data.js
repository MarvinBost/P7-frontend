import axios from 'axios';
export default {
    getMessages() {
        return axios.get('messages').then(response => response.data);
    },
    getUsers() {
        return axios.get('users').then(response => response.data);
    },
    isAdmin() {
        return axios.get("users/me").then(response => response.data.isAdmin);
    },
    getMe() {
        return axios.get("users/me").then(response => response.data);
    },
    deleteMessage(id) {
        return axios.delete(`messages/${id}`).then(response => response.data);
    },
    deleteUser(id) {
        return axios.delete(`users/${id}`).then(response => response.data);
    },
    postMessage(payload) {
        return axios.post(`messages/new`, payload).then(response => response.data);
    },
    likeMessage(id) {
        return axios.post(`messages/${id}/like`).then(response => response.data);
    },
    dislikeMessage(id) {
        return axios.post(`messages/${id}/dislike`).then(response => response.data);
    },
    upUser(id, payload) {
        return axios.put(`/users/${id}`, payload).then(response => response.data);
    }
}