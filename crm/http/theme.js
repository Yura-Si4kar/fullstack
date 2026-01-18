import { $host } from ".";

export const setThemeSchemeToCookie = async (theme) => {
    const { data } = await $host.post('/api/theme', { theme });
    
    return data;
}