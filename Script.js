function Login(element) {
    if (element.innerText=="Login"){
        element.innerText=
        "Logoff";
    }
    else{
        element.innerText=
        "Login";
    }
}
var x=0
var y=0
function Likes1(element){
    x++
    element.innerText=x+" Likes"
}
function Likes2(element){
    y++
    element.innerText=y+" Likes"
}
function Add(element){
    element.remove()
    
}      