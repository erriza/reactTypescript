import axios from "axios";
import { Diaire, NewDiarie } from "../../types";

const baseUrl = 'http://localhost:3003/api/diaries';

export const getAllDiaries = () => {
    return axios.get(baseUrl).then(response => response.data);
}

// export const createDiarie = (object: NewDiarie) => {
//     return axios
//     .post<Diaire>(baseUrl, object)
//     .then(response => response.data);
// }

export const createDiarie = async (object: NewDiarie) => {
        const response = await axios.post<Diaire>(baseUrl, object);
        return response.data;   
}