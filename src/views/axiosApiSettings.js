import axios from 'axios'

const getAPI = axios.create({
    // baseURL: 'http://192.168.1.150:8000',
    baseURL: 'http://localhost:3050',
    timeout: 8000,
})

export { getAPI }