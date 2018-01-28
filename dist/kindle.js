"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getTokens(query = 'firebase:authUser:') {
    const results = {};
    for (const v in localStorage) {
        if (v.indexOf(query) !== -1) {
            results[v] = localStorage.getItem(v);
        }
        return results;
    }
    return null;
}
exports.getTokens = getTokens;
;
function setToken(k, v) {
    let vString;
    if (typeof v !== 'string') {
        vString = JSON.stringify(v);
    }
    ;
    localStorage.setItem(k, vString || v);
}
exports.setToken = setToken;
;
// module.exports = {
//     getTokens: getTokens,
//     setToken: setToken
// } 
//# sourceMappingURL=kindle.js.map