import axios from 'axios';
export default {
    getMessages() {
        return axios.get('messages?limit=10').then(response => response.data);
    }
}