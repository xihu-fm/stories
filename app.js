'use strict';

module.exports = app => {

    app.beforeStart(function*() {
        // 保证应用启动监听端口前数据已经准备好了
        // 后续数据的更新由定时任务自动触发
        yield app.runSchedule('update_access_token');
    });

    app.messenger.on('update_access_token_action', data => {
        app.config.accessToken = data.access_token;
        console.log('worker ' + process.pid, data)
    });

    app.messenger.on('egg_ready_agent_action', data => {
        console.log('worker ' + process.pid, data)
    });
};