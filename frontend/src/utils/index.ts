import axios from 'axios'

export const axiosPublic = axios.create({
    baseURL: 'http://localhost:8000/api'
})