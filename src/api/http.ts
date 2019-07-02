import Axios from 'axios';
import Vue from 'vue';

export const ajax = (req: any) => {
    return Axios.post(req.url, req.data, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        baseURL: '/blog_front_api',
        transformRequest: [function (data) {
            let ret = '';
            for (let it in data) {
                ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&';
            }
            return ret;
        }]
    }).then(res => {
        let resData = res.data;
        // 说明超时了
        if (resData && resData.data.errorCode == '200') {
            location.href = '/login';
            return false;
        }
        return Promise.resolve(resData);
    }).catch(err => {
        return Promise.reject(err);
    });
}