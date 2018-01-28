let get =(k) => {
    let results = {};
    for (v in localStorage) {
        if (v.indexOf('firebase:authUser:') !== -1) {
            results[v] = localStorage.getItem(v);
        }
        return results;
    }
};
let set = (k, v) => {
    if (typeof v !== 'string') {
        v = JSON.stringify(v);
    };
    localStorage.setItem(k, v);
};
export function get(k) {
    return get(k);
}
export function set(k,v) {
    return set(k,v);
}

module.exports = {
    get: get,
    set: set
}