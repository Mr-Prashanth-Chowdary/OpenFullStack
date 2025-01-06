import axios from 'axios';

const url = 'http://localhost:3001/persons'

const get =()=>{
    const res = axios.get(url)
    return res.then((response)=> response.data)
}
const add = (newObj)=>{
    const res = axios.post(url,newObj)
    return res.then((response)=> response.data)
}
const put = (id,newObj)=>{
    const res = axios.put(`${url}/${id}`,newObj)
    return res.then((respone)=>respone.data)
}
const del = (id)=>{
    const res = axios.delete(`${url}/${id}`)
    return res.then((response)=>response.data)
}

export default {get,add,put,del}