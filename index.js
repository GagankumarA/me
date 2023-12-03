// var ary = [10, 8, 6, 3, 5, 2]
// var ma_p = ary.map(task);
// function task(i) {
//     return i * 5;
// }
// console.log(ma_p);

let a = [
    {fname : "Amruth" , lname : "R B"},
    {fname : "Anand" , lname : "B M"},
    {fname : "Bhagavathy" , lname : "Raj"},
];
let b = a.map(c);
function c(d){
    return d.fname + " " + d.lname;
}
console.log(b);