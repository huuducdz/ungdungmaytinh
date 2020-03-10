function cong() {
    let bang1 = document.getElementById("bang1").value;
    let bang2 = document.getElementById("bang2").value;
    let a = parseInt(bang1);
    let b = parseInt(bang2);
let ketqua = a + b;
document.getElementById("result").innerHTML = ketqua ;
}
function tru() {
    let bang1 = document.getElementById("bang1").value;
    let bang2 = document.getElementById("bang2").value;
    let a = parseInt(bang1);
    let b = parseInt(bang2);
    let ketqua = a - b;
    document.getElementById("result").innerHTML=ketqua;
}
function nhan() {
    let bang1 = document.getElementById("bang1").value;
    let bang2 = document.getElementById("bang2").value;
    let a = parseInt(bang1);
    let b = parseInt(bang2);
    let ketqua = a * b;
    document.getElementById("result").innerHTML=ketqua;
}
function chia() {
    let bang1 = document.getElementById("bang1").value;
    let bang2 = document.getElementById("bang2").value;
    let a = parseInt(bang1);
    let b = parseInt(bang2);
    let ketqua = a / b;
    document.getElementById("result").innerHTML =  ketqua;
}
