import axios from 'axios';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router';

const baseURL = 'http://localhost:4000/api';

axios.defaults.withCredentials = true
const axiosConfig = {
    withCredentials: true,
    headers: {
        "Content-Type": "application/json",
    },
}


// get cars from API
export const getCars = async () => {
    const cars = await axios.get(`${baseURL}/cars`, axiosConfig);
    console.log(cars.data);
    return cars.data;
};


export const getCarDetails = async (id) => {
    const carDetail = await axios.get(`${baseURL}/cars/${id}`, axiosConfig);
    return carDetail;
};

// add a new car using API 
export const addCar = async ({ id, car_model, rent_price, status, image }) => {
    const obj = { car: { "car_model": car_model, "rent_price": rent_price, "car_status": status, "car_image": image } }
    await axios.post(`${baseURL}/cars`, obj, axiosConfig);
};

// delete car


// get rentals from API
export const getRentals = async () => {
    const rentals = await axios.get(`${baseURL}/rentals`, axiosConfig);
    return rentals;
};

export const addRental = async ({ car_id, date_rent, date_return, destination }) => {
    const obj = { rental: { "car_id": car_id, "date_rent": date_rent, "date_return": date_return, "destination": destination } }
    await axios.post(`${baseURL}/rentals`, obj, axiosConfig);
};

// authencitation

export const signUp = async ({ email, first_name, last_name, age, gender }) => {
    const obj = { user: { "email": email, "first_name": first_name, "last_name": last_name, "age": age, "gender": gender } }
    return await axios.post(`${baseURL}/users`, obj);
};

export const signIn = async ({ email }) => {
    const obj = { user: { "email": email } }
    return await axios.post(`${baseURL}/login`, obj, axiosConfig).then(response => { localStorage.setItem('userId', response.data.session.public_id); localStorage.setItem('user_last_name', response.data.last_name) })

};

export const signOut = async () => {
    localStorage.removeItem('token');
    // navigate('../login');
};

// export default connectionString;