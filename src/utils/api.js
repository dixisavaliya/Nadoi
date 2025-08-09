import axios from 'axios';

const BaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:8000/api';


function getHeaders(isPublic) {
    const headers = { 'Content-Type': 'application/json' };

    if (!isPublic) {
        headers["Authorization"] = `Basic ${getToken()}`;
    }
    return headers
};

const handleAuthError = (error) => {
    console.log(error.response);
    if (error && error.response && (error.response.status === 403 || error.response.status === 401)) {
        localStorage.removeItem("token");
        document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        window.location.href = "/login";
    }
};


export const getToken = () => {
    if (typeof window !== "undefined") {
        return localStorage.getItem("token") || "";
    }
    return "";
};

export const getData = async (path, isPublic = false) => {
    try {
        if (!BaseUrl) {
            throw new Error('API base URL is not configured');
        }
        const headers = getHeaders(isPublic);
        const response = await axios.get(`${BaseUrl}/${path}`, {
            headers
        });
        return response.data;
    } catch (error) {
        if (!isPublic) {
            handleAuthError(error);
        }
        throw error;
    }
}

export const postData = async (path, data = {}, isPublic = false) => {
    try {
        const headers = getHeaders(isPublic);
        const response = await axios.post(`${BaseUrl}/${path}`, data, {
            headers
        });
        return response.data;
    } catch (error) {
        handleAuthError(error);
        throw error;
    }
};

export const putData = async (path, data = {}, isPublic = false) => {
    try {
        const headers = getHeaders(isPublic);
        const response = await axios.put(`${BaseUrl}/${path}`, data, {
            headers
        });
        return response.data;
    } catch (error) {
        handleAuthError(error);
        throw error;
    }
};

export const patchData = async (path, data = {}, isPublic = false) => {
    try {
        const headers = getHeaders(isPublic);
        const response = await axios.patch(`${BaseUrl}/${path}`, data, {
            headers
        });
        return response.data;
    } catch (error) {
        handleAuthError(error);
        throw error;
    }
};

export const deleteRequest = async (path, data = {}, isPublic = false) => {
    try {
        const headers = getHeaders(isPublic);
        const response = await axios.delete(`${BaseUrl}/${path}`, {
            data: data,
            headers
        });
        return response.data;
    } catch (error) {
        handleAuthError(error);
        throw error;
    }
};
