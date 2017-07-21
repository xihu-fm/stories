'use strict';

module.exports = appInfo => {
    const config = {};

    config.keys = appInfo.name + '_wongxming';

    config.view = {
        defaultViewEngine: 'nunjucks',
        mapping: {
            '.tpl': 'nunjucks',
        },
    };

    config.bodyParser = {
        enableTypes: ['json', 'form', 'text'],
        extendTypes: {
            text: ['text/xml']
        }
    };

    config.security = {
        csrf: {
            ignoreJSON: true,
        }
    };

    config.mysql = {
        // database configuration
        client: {
            // host
            host: '',
            // port
            port: '',
            // username
            user: '',
            // password
            password: '',
            // database
            database: '',
        },
        // load into app, default is open
        app: true,
        // load into agent, default is close
        agent: false,
    };

    return config;
};