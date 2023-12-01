import axios from "axios"

export default {
    register: async (dataRegister)=>{
        // return await axios.post(import.meta.env + "/users",data)

        return await axios.post(`http://localhost:8000/users`,dataRegister)
    },
    login: async (data)=>{
        // return await axios.post(import.meta.env + "users",data)
        // return await axios.post(`http://localhost:8000/users`,data)
    },
    checkRegister : async (email)=>{
        return await axios.get(`http://localhost:8000/users?email=${email}`)

    }
}
// data : id,username,email...