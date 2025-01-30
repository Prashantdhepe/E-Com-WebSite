import axios from "axios";
import stores from "./stores";
import router from "./router";

let axiosClient = axios.create({
    baseURL: `${import.meta.env.VITE_API_BASE_URL}/api/${import.meta.env.VITE_API_CURRENT_VERSION}`,
    withCredentials: true,
});

axiosClient.interceptors.request.use(configs => {
    configs.headers.Authorization = `Bearer ${stores.state.auth.user.token}`;
    return configs;
});

axiosClient.interceptors.response.use(response => {
    return response;
},
    error => {
        if(error.response && (error.response.status === 401 || error.response.status === 403)){
            localStorage.removeItem('auth');
            localStorage.removeItem('user');
            router.push({name: 'login'});
            return Promise.reject(error);
        }else if(error.response && error.response.status === 404){
            router.push({name: 'not-fount'});
            return Promise.reject();
        }
        throw error;
    });

export default axiosClient;
