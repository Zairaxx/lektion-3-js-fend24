//For-loop

// for(startvärde, villkor, öka startvärde efter iteration)



let total = 0;

for(let x=0; x < 10; x++){
    total +=5;
}

// console.log(total)

//While-loop
let y = 0;

while(y < 10){
    
    console.log(y);
    y++;
}


//forEach-metod - Detta är en array-metod och kan ENDAST användas för arrayer
let myArr = ["Banan","Körsbär","Jordgubbar","Persika", "Äpple"];
// for(let x=0; x < myArr.length; x++){
//     console.log(myArr[x]);
// }

let berries = [];
let fruits = [];

//Non-mutative
myArr.forEach((item) => {
    if(item === "Körsbär" || item === "Jordgubbar"){
        berries.push(item);
    } else {
        fruits.push(item)
    }
})

console.log(myArr);
console.log("Berries: ", berries);
console.log("Fruits: ", fruits);

//Vanlig funktion vs Array function
// function checkItem(item){
//     console.log(item)
// }

// let checkItem = (item) => { console.log(item)}