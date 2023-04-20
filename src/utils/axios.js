import axios from "axios";

const getMainAxios = () => {
    return axios.create({
        baseURL: process.env.FRONTEND_URL,
    })
}

export default getMainAxios