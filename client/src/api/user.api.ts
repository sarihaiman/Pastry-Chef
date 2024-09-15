import axios from 'axios';
// import { domain } from '../Config';
import { SignInData, User  } from "../interface/user.interface";

export const SignIn = async (data: SignInData) => {
    try {
        const response = await axios.post(`http://localhost:3000/signin`, data, {
            headers: {
              'Content-Type': 'application/json'
            }
          });
        return response.data;
    } catch (error) {
        console.error('error in api request of users', error);
        throw error;
    }
}

export const SignUp = async (data: User) => {
    try {
        const response = await axios.post(`http://localhost:3000/signup`, data, {
            headers: {
              'Content-Type': 'application/json'
            }
          });
        return response.data;
    } catch (error) {
        console.error('error in api request of users', error);
        throw error;
    }
}