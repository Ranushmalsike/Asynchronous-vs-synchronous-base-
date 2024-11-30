console.log('start');
function hello(item, callback) {
    setTimeout(() => {
        callback({item:[1, 2, 3, 4]});
    }, 2000);
    
};
// this callback word change your like name
const helloV = hello(1, callback => {
console.log(callback);
});

console.log('end');
