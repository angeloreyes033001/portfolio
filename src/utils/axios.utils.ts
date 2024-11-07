import axios from 'axios';

const BASE_URL = "http://localhost:3000/api";

const axiosInstance = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

const setBearerToken = (token: string): void => {
    if (token) {
        axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } else {
        delete axiosInstance.defaults.headers.common['Authorization'];
    }
};

const request = async (method: 'GET' | 'POST' | 'PUT' | 'DELETE', url: string, data?: object, token?: string)=> {
  if (token) {
    setBearerToken(token);
  }

    const config = {
        method,
        url,
        data,
    };

    const response = await axiosInstance(config);
        return response.data;
    };
const get = async (url: string, token?: string)=> {
  return request('GET', url, undefined, token);
};

const post = async (url: string, data: object, token?: string)=> {
  return request('POST', url, data, token);
};

const put = async (url: string, data: object, token?: string)=> {
  return request('PUT', url, data, token);
};

// DELETE request utility
const del = async (url: string, token?: string)=> {
  return request('DELETE', url, undefined, token);
};

export { get, post, put, del };
