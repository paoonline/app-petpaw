import {axiosInstance} from './axiosInstance';

export const api_product_list = () => axiosInstance.get('/product_list');
