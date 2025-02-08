import axios from "axios";


const userApi = axios.create({
    baseURL: "http://localhost:3000",
});


export async function login(id: string) {
    return userApi.post("/login", { id: id })
}
