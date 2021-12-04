import * as auth from '../auth';
import axios from 'axios';
import { SERVER_BASE_URL } from '..';
import { useRouter } from 'next/dist/client/router';
import { useSession } from 'next-auth/client';

export const run = async (code, type) => {
    if (!auth.validateToken()) {
        throw alert("Please login first.");
    }
    const response = await axios.post(`${SERVER_BASE_URL}/runner`, {
        token: auth.getToken(),
        code,
        type,
        input: '',
    });
    return response.data.output;
}