const name = "praveen";
const userAge= 24;

const user = {
  name,
  age:userAge ,
  location: "chennai"
};

console.log(user);

//object destructuring 

const product = {
    label :'Red NoteBook',
    price : 3,
    stock : 21,
    salePrice :undefined
}

// const label = product.label;
// const stock = product.stock;

const {label,stock} = product
console.log(label)
console.log(stock)

const transaction = (type,{label,stock}) => {
  console.log(type,label,stock)
}

transaction('order',product)






