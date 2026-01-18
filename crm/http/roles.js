import { $host } from ".";

export const getRolesList = async () => {
    const { data } = await $host.get('/api/roles', { withCredentials: true });
    
    return data;
}

export const addRole = async (roleData) => {
    const { data } = await $host.post('/api/roles', roleData, { withCredentials: true });
    return data;
}