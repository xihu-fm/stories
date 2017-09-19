module.exports = {
    
    schedule: {
        cron: '0 30 11 * * 2', //每周二下午7：30点触发
        type: 'worker', 
    },
    
    * task(ctx) {

        var webhookUrl = 'https://oapi.dingtalk.com/robot/send?access_token=618dea7fa1504c436d46cd9686d6b81fc7e0b7c0ceb0da1d022b08e35f6b4c1e';
        const res = yield ctx.curl(webhookUrl, {
            method: 'POST',
            contentType: 'json',
            data: {
                "msgtype": "text",
                "text": {
                    "content": "@所有人 ，羽毛球活动出发啦！"
                },
                "at": {
                    "atMobiles": [], 
                    "isAtAll": true
                }
            }
        });
    },
};
