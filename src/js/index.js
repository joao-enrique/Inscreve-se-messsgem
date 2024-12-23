const button = document.getElementById("btn-submit")
const messageError = document.getElementById("error-message")
const sucessmessagemodal = document.getElementById("sucess-message")
const form = document.getElementById("container")




function validar(){
    const email = document.getElementById("email");

    if(email.value == ""){
        messageError.style.display = "block"
        email.style.backgroundColor = "hsl(4, 100%, 67%)"
        email.style.opacity = "0.5"
        email.classList.add("text-place")
    }else{
        messageError.style.display = "none"
        email.style.backgroundColor = "hsl(0, 0%, 100%)"
        email.classList.remove("text-place")
        form.style.display = "none"
        sucessmessagemodal.style.display = "block"
    }
}

function back(){
    const button = document.getElementById("btn-dimiss")

    if(button){
        sucessmessagemodal.style.display = "none"
        form.style.display = "flex"
    }
}
