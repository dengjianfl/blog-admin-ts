import Axios from 'axios';

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
        return Promise.resolve(resData);
    }).catch(err => {
        return Promise.reject(err);
    });
}