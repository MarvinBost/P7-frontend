import axios from 'axios'

export default {
    state: {},
    mutations: {

    },
    actions: {
        LOGIN: ({
                commit
            },
            payload) => {
            commit('LOGIN')
            return new Promise((resolve, reject) => {
                axios.post('/users/login', payload)
                    .then(({
                        data,
                        status
                    }) => {
                        if (status === 200) {
                            const token = data.token
                            localStorage.setItem('access_token', token)
                            resolve(true)
                        }
                    })
                    .catch(err => {
                        localStorage.removeItem('access_token')
                        reject(err)
                    })
            })
        }
    },
    modules: {}
}