import { $host } from ".";

export const authorization = async (email, password) => {
    const { data } = await $host.post('/api/users/login', { email, password });
    
    return data;
}

export const registration = async (userData) => {
  const { data } = await $host.post('/api/users/registration', userData);
  return data;
}

export const logout = async () => {
    const { data } = await $host.post('/api/users/logout');

    return data;
}