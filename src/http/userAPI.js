import { $authHost, $host } from "./index";

export const registration = async (email, password) => {
    const response = await $host.post('api/user/registration');
    return response
}

export const login = async (email, password) => {
    const response = await $host.post('api/user/login');
    return response
}

// export const check = async (email, password) => {
//     const response = await $host.post('api/user/registration', {email, password});
//     return response
// }