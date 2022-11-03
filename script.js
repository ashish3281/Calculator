function display(val){
    document.getElementById("id1").value+=val;
}
function solve(){
    let x=document.getElementById("id1").value;
    let y=eval(x);
    document.getElementById("id1").value=y;
}
function clr(){
    document.getElementById("id1").value=" ";
}