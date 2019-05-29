"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// post的请求解析
class Parse {
    static parseQueryStr(queryStr) {
        const queryData = {};
        const queryStrList = queryStr.split('&');
        for (const queryStr of queryStrList.entries()) {
            const itemList = queryStr.split('=');
            queryData[itemList[0]] = decodeURIComponent(itemList[1]);
        }
        return queryData;
    }
    static parsePostData(ctx) {
        return new Promise((resolve, reject) => {
            try {
                let postData = '';
                ctx.req.addListener('data', (data) => {
                    postData += data;
                });
                ctx.req.addListener('end', (data) => {
                    const parseData = this.parseQueryStr(postData);
                    resolve(parseData);
                });
            }
            catch (err) {
                reject(err);
            }
        });
    }
}
exports.default = Parse;
//# sourceMappingURL=parse.js.map