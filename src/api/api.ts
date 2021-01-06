import axios from "axios";
import {
    EditTariffsInfoResType,
    GetTariffsResType,
    LoginResType,
    OrderDataType,
    SaveOrderInfoResType,
    TariffsInfoDataType
} from "./Types/ApiTypes";

const instance = axios.create({
    withCredentials: true,
    baseURL: "http://localhost:5000/api/",
    headers: {}
});

export let authAPI = {
    login: async (email: string, password: string) => {
        return await instance.post<LoginResType>('login', {email, password})
    }
};

export let projectCreationAPI = {
    getTariffsInfo: async () => {
        return await instance.get<GetTariffsResType>('getTariffsInfo')
    },
    saveOrderInfo: async (orderData: OrderDataType) => {
        return await instance.post<SaveOrderInfoResType>('saveOrderInfo', orderData)
    },
    editTariffsInfo: async (tariffsData: TariffsInfoDataType) => {
        return await instance.post<EditTariffsInfoResType>('editTariffsInfo', tariffsData)
    },

};

