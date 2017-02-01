function validForm() {
    return (validName() && validEmail()&& validAge());
}
function validAge() {
    return(underFlow()&&overFlow());
}

function  validName() {
    var x=document.forms["myForm"]["fname"].value;
    if(x==""){
        alert("name must be filled");
        return false;
    }

    return true;
}

function  validEmail() {
    var x=document.forms["myForm"]["email"].value;
    if(x==""){
        alert("email must be filled");
        return false;
    }

    return true;
}
function underFlow() {
    var txt = "";
    if (document.getElementById("id1").validity.rangeUnderflow) {
        txt = "Value too small";
    } else {
        txt = "Input OK";
    }
    document.getElementById("demo").innerHTML = txt;
}
function overFlow() {
    var txt = "";
    if (document.getElementById("id1").validity.rangeOverflow) {
        txt = "Value too large";
    } else {
        txt = "Input OK";
    }
    document.getElementById("demo").innerHTML = txt;
}
