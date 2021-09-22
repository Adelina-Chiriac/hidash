module.exports = {
    forEach(arr, func) {
        for (let i = 0; i < arr.length; i++) {
            const value = arr[i];
            func(value, i);
        }
    }
};