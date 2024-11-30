console.log('start');

function hello(id, callback) {
    setTimeout(() => {
        callback({items :[1, 2, 3, 4]});
    }, 2000);
    
};

// If may need to add more function
function get_price(item, callback) {
    setTimeout(() => {
        console.log({price :[500]});
    }, 5000);
}

// this callback word change your like name
const helloV = hello(1, items => {
console.log(items);
//2nd value of function
get_price(items[0], price => {
    console.log(price);
});

});

console.log('end');
