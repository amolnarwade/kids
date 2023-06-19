

function validition(){
    if(document.myform.cname.value==""){
        alert("Please provide your name!");
        document.myform.cname.focus();
        return false;
    }
    return true
}