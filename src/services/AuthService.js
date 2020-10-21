import axios from 'axios';
export default {
    login(credentials) {
        return axios
            .post('users/login', credentials)
            .then(response => response.data);
    },
    signUp(credentials) {
        return axios
            .post('users/signup/', credentials)
            .then(response => response.data);
    },
    getSecretContent() { //profil
        return axios.get('users/me/').then(response => response.data);
    }
};