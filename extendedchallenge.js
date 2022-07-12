function payCheck (hours, wage){
let extra = 0;
pay = hours * wage;
if(hours>40){
    extra = (hours - 40) * (wage * 0.5);
}
pay += extra;
console.log(hours, wage, pay);
let pathToMillion = 1000000 / pay;
console.log(Math.ceil(pathToMillion));
}

payCheck(50, 10);