const a = 1;
const promise = new Promise((resolve, reject) =>{
setTimeout(() => {
    if(a == 2){
        resolve({data: 'ok'});
    }
    else{
        reject(new Error('problem'));
    }
}, 1000);
});

promise.then(result => {
console.log(result);
}).catch(error =>{
console.log(error.message);
});

