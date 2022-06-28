import axios from 'axios'

const axiosBaseURI = axios.create({
    baseURL: `http://localhost:3001/api/customers`,
})

export default axiosBaseURI
