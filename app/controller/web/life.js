'use strict';

module.exports = function*() {


    yield this.render('life.tpl', { year: this.params.year || 1985, month: this.params.month || 2 });
};