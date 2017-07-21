'use strict';

module.exports = {
    // 通过 schedule 属性来设置定时任务的执行间隔等配置
    schedule: {
        interval: '2h', // 1 分钟间隔
        type: 'worker', // 指定所有的 worker 都需要执行
    },
    // task 是真正定时任务执行时被运行的函数，第一个参数是一个匿名的 Context 实例
    * task(ctx) {

        // 广播给其他worker进程
        console.log('worker '+process.pid +',update_access_token_action')
        ctx.app.messenger.sendToApp('update_access_token_action', {data:'ok'})
    },
};
