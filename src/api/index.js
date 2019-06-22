import axios from 'axios';

axios.defaults.baseURL="http://react.zbztb.cn/site/"

axios.interceptors.response.use(function(response){
    return response.data;
},function(error){
    return Promise.reject(error);
})

export const getGoods=()=>axios.get("goods/gettopdata/goods");
export const getGoodsGroup=()=>axios.get("goods/getgoodsgroup");
export const getGoodsInfo=(id)=>axios.get(`goods/getgoodsinfo/${id}`);

