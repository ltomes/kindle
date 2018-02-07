"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getTokens(query = 'firebase:authUser:', localStorageRef = localStorage) {
    const results = {};
    for (const v of Object.keys(localStorageRef)) {
        if (v.indexOf(query) !== -1) {
            results[v] = localStorageRef.getItem(v);
        }
        return results;
    }
    return null;
}
exports.getTokens = getTokens;
;
function setToken(k, v, localStorageRef = localStorage) {
    let vString;
    if (typeof v !== 'string') {
        vString = JSON.stringify(v);
    }
    ;
    console.log('localStorage');
    console.log(localStorage);
    console.log('localStorageRef');
    console.log(localStorageRef);
    localStorageRef.setItem(k, vString || v);
}
exports.setToken = setToken;
;
//# sourceMappingURL=kindle.js.map