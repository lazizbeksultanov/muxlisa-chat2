import axios from "axios";

const getMainAxiosBack = () => {
    return axios.create({
        baseURL: process.env.BACKEND_URL,
    })
}

export default getMainAxiosBack