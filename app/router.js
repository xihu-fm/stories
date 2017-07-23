'use strict';

module.exports = app => {
    //const auth = app.middlewares.auth();
    // 页面路由
    app.get('/', app.controller.web.home);
    app.get('/detail', app.controller.web.home);

    app.get('/api/xihu/stories', app.controller.api.xihu.stories.list);
    app.get('/api/xihu/stories/:id', app.controller.api.xihu.stories.show);
    //提交数据
    app.post('/api/xihu/stories/:chatId/bullet', app.controller.api.xihu.stories.bullet);
    app.post('/api/xihu/stories', app.controller.api.xihu.stories.create);

    app.get('/960', app.controller.web.life);
    app.get('/960/:year', app.controller.web.life);
    app.get('/960/:year/:month', app.controller.web.life);
};