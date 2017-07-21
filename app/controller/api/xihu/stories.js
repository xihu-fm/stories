'use strict';

exports.list = function*() {

    const data = {
        articles: []
    }

    const results = yield this.app.mysql.select('stories');

    results.forEach(function(item) {
        data.articles.push({
            articleId: item.title_en,
            title: item.title,
            desc: item.desc,
            author: item.author
        });

    });

    this.body = data;
};


exports.show = function*() {

    var data = {
        chats: []
    }
    const story = yield this.app.mysql.get('stories', { title_en: this.params.id });

    data.articleId = story.title_en;
    data.title = story.title;
    data.desc = story.desc;
    data.author = story.author;

    const results = yield this.app.mysql.query(
        'select c.id as chatId,c.type,c.header as header,c.name,c.content' +
        ',b.name as bName, b.comment as bComment ' +
        ' from chats c left join bullets b on c.id = b.chat_id' +
        ' where c.story_id = ? order by chatId asc;', [story.id]);

    var currentChat = {};
    results.forEach(function(item) {
        if (item.chatId != currentChat.id) {

            //新建
            currentChat = { id: item.chatId, type: item.type, header: item.header || '', name: item.name || '', content: item.content, bullets: [] };

            data.chats.push(currentChat);
        }

        if (item.bName) {
            currentChat.bullets.push({ name: item.bName, comment: item.bComment });
        }

    });

    this.body = data;
};


exports.bullet = function*() {
    var post = this.request.body;
    if (!post) {
        this.body = { code: -1, msg: "缺少内容" };
        return;
    }

    const bullet = yield this.app.mysql.insert('bullets', { chat_id: this.params.chatId, name: post.name || '匿名', comment: post.comment });
    console.log(bullet)
    this.body = { code: 0 };

};

exports.create = function*() {
    var post = this.request.body;
    if (!post || !post.chats) {
        this.body = { code: -1, msg: "缺少内容" };
        return;
    }

    const conn = yield this.app.mysql.beginTransaction();

    try {
        const story = yield conn.insert('stories', { title: post.title, title_en: post.titleId, desc: post.desc, author: post.author });
        const story_id = story.insertId;

        post.chats.forEach(function(item) {
            item.story_id = story_id;
        });

        yield conn.insert('chats', post.chats);
        yield conn.commit();
    } catch (err) {
        console.log(err)
        // error, rollback
        yield conn.rollback(); // rollback call won't throw err
        this.body = { code: -1, msg: "添加失败" };
        return;
    }


    this.body = { code: 0 };

};