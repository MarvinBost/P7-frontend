import axios from 'axios';
export default {
    login(credentials) {
        return axios.post('users/login', credentials)
    },
    signUp(credentials) {
        return axios.post('users/signup', credentials)
    }
};