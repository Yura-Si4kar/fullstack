import { $host } from ".";

export const usersList = async () => {
    const { data } = await $host.get('/api/users', { withCredentials: true });

    return data;
}

export const heartbeat = async (userId) => {
    const { data } = await $host.post('/api/users/heartbeat', { userId }, { withCredentials: true });

    return data;
}

export const removeUser = async (userId) => {
    const { data } = await $host.delete('/api/users', { data: { userId }, withCredentials: true });

    return data;
}

export const updateUser = async (updateData) => {
    const { data } = await $host.put('/api/users', updateData, { withCredentials: true });

    return data;
}

export const getMe = async () => {
    const { data } = await $host.get('/api/users/me', { withCredentials: true });

    return data;
}