export function getTokens (query = 'firebase:authUser:', localStorageRef = localStorage) {
    const results = {};
    for (const v in Object.keys(localStorageRef)) {
        if (v.indexOf(query) !== -1) {
            results[v] = localStorageRef.getItem(v);
        }
        return results;
    }
    return null;
};
export function setToken (k, v, localStorageRef = localStorage) {
    let vString;
    if (typeof v !== 'string') {
        vString = JSON.stringify(v);
    };
    console.log('localStorage');
    console.log(localStorage);
    console.log('localStorageRef');
    console.log(localStorageRef);
    localStorageRef.setItem(k, vString || v);
};