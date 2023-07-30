import axios from 'axios';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router';

const baseURL = 'http://127.0.0.1:4000/api';

axios.defaults.withCredentials = true

const axiosConfig = {
    withCredentials: true,
    headers: {
        "Content-Type": "application/json",
    },
}


// get cars from API
export const getBooks = async () => {
    const cars = await axios.get(`${baseURL}/books`, axiosConfig);
    console.log(cars.data);
    return cars.data;
};


export const getBooksDetails = async (id) => {
    const carDetail = await axios.get(`${baseURL}/books/${id}`, axiosConfig);
    return carDetail;
};

// add a new car using API 
export const addBook = async (obj) => {
    await axios.post(`${baseURL}/books`, obj, axiosConfig);
};

export const updateBook = async (obj) => {
    await axios.patch(`${baseURL}/books`, obj, axiosConfig);
};

// delete car
export const deleteBook = async (data) => {
    const res = await axios.delete(`${baseURL}/books`, data, axiosConfig);
    return res;
};
// authencitation

export const signUp = async (obj) => {
    return await axios.post(`${baseURL}/users`, obj);
};

export const signIn = async (obj) => {
    return await axios.post(`${baseURL}/users/signin`, obj, axiosConfig).then(response => { localStorage.setItem('token', response.data.token) })
};

export const signOut = async () => {
    localStorage.removeItem('token');
    // navigate('../login');
};

// export default connectionString;