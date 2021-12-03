import { useSession } from 'next-auth/client';
import axios from 'axios';
import { SERVER_BASE_URL } from '..';

// login request to the server with axios and next-auth
export const login = async (email, password) => {
    const response = await axios.post(`${SERVER_BASE_URL}/auth/signin`, {
        email,
        password,
    }).catch(err => {
        if (err.response.status === 400 || err.response.status === 401) {
            throw alert('Invalid email or password');
        }
    });
    if (response == undefined || (response.status !== 200 && response.status !== 201)) {
        throw alert('Login failed!');
    }
    console.log(response.data.access_token)
    useSession.accessToken = response.data.access_token;
    console.log("로그인" + useSession.accessToken);
    return response.data;
}

export const signup = async (name, email, password) => {
    const response = await axios.post(`${SERVER_BASE_URL}/auth/signup`, {
        name,
        email,
        password,
    }).catch(err => {
        if (err.response.status === 400 || err.response.status === 401) {
            throw alert('Signup failed, maybe email is already used');
        }
    });
    if (response.status !== 200 && response.status !== 201) {
        throw alert('Signup failed!');
    }
    useSession.accessToken = response.data.access_token;
    return response.data;
}

export const logout = async () => {
    useSession.accessToken = undefined;
    return true;
}

export const getUser = async () => {
    const response = await axios.get(`${SERVER_BASE_URL}/auth/validate`, {
        token: useSession.accessToken,
    });
    if (response.status !== 200 && response.status !== 201) {
        throw new Error('Failed to get user!');
    }
    return response.data;
}

export const refreshToken = async () => {
    const response = await axios.post(`${SERVER_BASE_URL}/auth/refresh`, {
        token: useSession.accessToken,
    });
    if (response.status !== 200 && response.status !== 201) {
        throw new Error('Failed to refresh token!');
    }
    useSession.accessToken = response.data.access_token;
    return response.data;
}

export const validateToken = async () => {
    console.log(useSession.accessToken);
    const response = await axios.post(`${SERVER_BASE_URL}/auth/validate`, {
        token: useSession.accessToken,
    }).catch(err => {
        throw false;
    });
    if (response.status !== 200 && response.status !== 201) {
        return false;
    }
    return true;
}

export const getToken = () => {
    return useSession.accessToken;
}