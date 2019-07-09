const api = {
    login: '/user/login.do', // 登录
    register: '/user/register.do', // 注册
    test: '/user/test.do', // 测试
    getInfo: '/user/getInfo.do', // 获取当前登录人信息
    logOut: '/user/logOut.do', // 退出登录
    getArticleCategory: '/article/getArticleCategory.do', // 获取文章分类列表
    addAnArticle: '/article/addAnArticle.do', // 添加一篇文章
    getAllArticle: '/article/getAllArticle.do', // 获取文章列表
    getAnArticle: '/article/getAnArticle.do', // 获取文章列表
}

export default api;