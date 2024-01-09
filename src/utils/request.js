import axios from 'axios';

const request = axios.create({
    baseURL: 'https://643d6554f0ec48ce905b408d.mockapi.io/users/',
});

export const get = async (path, options = {}) => {
    const response = await request.get(path, options);
    return response.data;
};

export default request;
