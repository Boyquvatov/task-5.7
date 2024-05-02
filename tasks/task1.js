function submit(){
    let username = document.getElementById("username").value
    let password = +document.getElementById("password").value
    if(username == "admin"){
        if(password == 1234){
            alert("Success")
        }else{
            alert("password ERROR")
        }
    }else if(password == 1234){
        alert("Username ERROR")
    }else{
        alert("Username and password Error")
    }
}
function isShow(){
    let password = document.getElementById("password")
    if(password.type === "password"){
        password.type = "text"
    }else{
        password.type = "password"
    }
}