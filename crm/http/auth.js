import { $host } from ".";

export const usersList = async () => {
    const { data } = await $host.get('/api/users', { withCredentials: true });

    return data;
}

export const authorization = async (email, password) => {
    const { data } = await $host.post('/api/users/login', { email, password });
    
    return data;
}

export const registration = async (email, password) => {
    const { data } = await $host.post('/api/users/registration', { email, password });
    
    return data;
}

export const logout = async () => {
    const { data } = await $host.post('/api/users/logout');

    return data;
}