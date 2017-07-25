module.exports = {
    
    schedule: {
        cron: '0 0 2 * * 3', //每周三上午10点触发
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
                    "content": "@所有人 ，周二羽毛球活动顺利结束！活动费用20元/人，统一以专享红包形式给到 雨骋 。谢谢！"
                }
            }
        });
    },
};
