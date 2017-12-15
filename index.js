export function get(k) {
    let results = {};
    for (v in localStorage) {
        if (v.indexOf('firebase:authUser:') !== -1) {
            results[v] = localStorage.getItem(v);
        }
        return results;
    }
}
export function set(k, v) {
    localStorage.setItem(k, v)
}

module.exports = {
    get: get,
    set:set
}