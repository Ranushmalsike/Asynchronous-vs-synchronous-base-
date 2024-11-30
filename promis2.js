
const Product = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Get Product Item');
        resolve({Product_List : ['A', 'B', 'C', 'D']});
    }, 1000);
});

const Item_Price = new Promise((resolve, reject) =>{
    setTimeout(() => {
        console.log('Get Product Price');
        resolve({Item_price_list : [100, 250, 500, 150]});
    }, 5000);
});


Promise.all([Product, Item_Price]).then(result =>{
console.log(result);
});