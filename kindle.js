export function getTokens (k) {
    let results = {};
    for (v in localStorage) {
        if (v.indexOf('firebase:authUser:') !== -1) {
            results[v] = localStorage.getItem(v);
        }
        return results;
    }
};
export function setToken (k, v) {
    if (typeof v !== 'string') {
        v = JSON.stringify(v);
    };
    localStorage.setItem(k, v);
};

// module.exports = {
//     getTokens: getTokens,
//     setToken: setToken
// }