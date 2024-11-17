import axios from "axios"

const API_URL = process.env.REACT_APP_API_URL

const $axios = axios.create({
    withCredentials: true,
    baseURL: API_URL
})

export default $axios