import * as auth from '../auth'
import axios from 'axios';
import { SERVER_BASE_URL } from '..';

export const newPost = async (
    title,
    explain,
    example,
    testinput,
    testoutput,
) => {
    if (!auth.validateToken()) {
        throw new Error("plz login");
    }
    const response = await axios.post(`${SERVER_BASE_URL}/post`, {
        token: auth.getToken(),
        title,
        explain,
        example,
        testinput,
        testoutput,
    });
    if (response.status !== 200 && response.status !== 201) {
        throw new Error('Failed to create new post!');
    }
    return response.data.id;
}

export const getPostbyId = async (id) => {
    const response = await axios.get(`${SERVER_BASE_URL}/post/id/${id}`);
    if (response.status !== 200) {
        throw new Error('Failed to get post!');
    }
    return response.data;
}

export const getPosts = async (takes) => {
    const response = await axios.get(`${SERVER_BASE_URL}/post`, {
        params: {
            takes,
        },
    });
    if (response.status !== 200) {
        throw new Error('Failed to get posts!');
    }
    return response.data;
}

export const getPostsByDifficulty = async (difficulty) => {
    const response = await axios.get(`${SERVER_BASE_URL}/post/difficulty/${difficulty}`);

    if (response.status !== 200) {
        throw new Error('Failed to get posts!');
    }
    console.log(response.data);
    return response.data;
}