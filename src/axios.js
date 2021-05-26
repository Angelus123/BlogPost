import axios from 'axios'
const instance = axios.create({
    baseURL:"https://vila-5dd46-default-rtdb.firebaseio.com/"
})
instance.defaults.headers.common['Authorization'] = 'AUTH TOKEN FROM INSTANCE'
export default instance