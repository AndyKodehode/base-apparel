
let emailInput = document.querySelector(".e-mail")
let emailBtn = document.querySelector("#email-btn")
let emailP = document.querySelector("#email-p")





emailBtn.addEventListener("click", function(){
    console.log("button clicked")
    if(emailInput.value === "" || emailInput.value.includes("@")=== false){
        emailP.textContent = "no mail written"
    } else{
        emailP.textContent = "we got mail"
    }
})
