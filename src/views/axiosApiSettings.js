import axios from 'axios'

const getAPI = axios.create({
    baseURL: 'http://192.168.1.150:8000',
    //baseURL: 'http://123.231.54.28:8000',
    timeout: 8000,
})

export { getAPI }