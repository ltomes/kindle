export function getTokens (query = 'firebase:authUser:') {
    const results = {};
    for (const v in localStorage) {
        if (v.indexOf(query) !== -1) {
            results[v] = localStorage.getItem(v);
        }
        return results;
    }
    return null;
};
export function setToken (k, v) {
    let vString;
    if (typeof v !== 'string') {
        vString = JSON.stringify(v);
    };
    localStorage.setItem(k, vString || v);
};

// module.exports = {
//     getTokens: getTokens,
//     setToken: setToken
// }