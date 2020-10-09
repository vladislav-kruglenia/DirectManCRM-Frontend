import * as axios from 'axios'

const instance = axios.create({
        withCredentials: true,
        baseURL: "http://localhost:5000/api/",
        headers: {
        }
    });

export let authAPI = {
    login: async (email, password) =>{
        return await instance.post('login',{email, password})
    }
};

