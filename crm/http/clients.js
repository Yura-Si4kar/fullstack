import { $host } from ".";

export const getClientsList = async () => {
    const { data } = await $host.get('/api/clients', { withCredentials: true });
    
    return data;
}