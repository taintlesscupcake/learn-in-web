import auth from '../auth'
import axios from 'axios';
import { SERVER_BASE_URL } from '..';

export const newPost = async (title, content, privat) => {
    if (!auth.validateToken()) {
        throw new Error("plz login");
    }
    const response = await axios.post(`${SERVER_BASE_URL}/post/new`, {
        token: auth.getToken(),
        title,
        content,
        privat,
    });
    if (response.status !== 200) {
        throw new Error('Failed to create new post!');
    }
    return response.data;
}

export const getPostbyId = async (id) => {
    const response = await axios.get(`${SERVER_BASE_URL}/post/${id}`);
    if (response.status !== 200) {
        throw new Error('Failed to get post!');
    }
    return response.data;
}