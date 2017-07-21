'use strict';

var xml2js = require('xml2js');

module.exports = {
    parseXML(xml) {
        return new Promise((resolve, reject) => {
            xml2js.parseString(xml, { explicitArray: false, trim: true }, function(err, obj) {
                if (err) {
                    return reject(err);
                }

                resolve(obj);
            });
        });
    },
};
