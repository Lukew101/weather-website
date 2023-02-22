// Main elements
const contactForm = document.querySelector("#contactForm");
const succMessage = document.querySelector(".success-message");
const submitButton = document.querySelector(".submit-button");
// Form inputs
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const subjectInput = document.querySelector("#subject");
const addressInput = document.querySelector("#address");
const messageInput = document.querySelector("#message");

// Form validation
function validateForm(){
    contactForm.addEventListener("submit", function(event){
        
        event.preventDefault()

        let isValid = true;

        if(checkLength(nameInput.value,0)){
            nameError.style.display = "none";
            
        } else {
            nameError.style.display = "block";
            isValid = false;
        }

        if(checkLength(subjectInput.value,9)){
            subjectError.style.display = "none";
        } else {
            subjectError.style.display = "block";
            isValid = false;
        }

        if(validateEmail(emailInput.value)){
            emailError.style.display = "none";
        } else {
            emailError.style.display = "block";
            isValid = false;
        }

        if(checkLength(addressInput.value,24)){
            addressError.style.display = "none";
        } else {
            addressError.style.display = "block";
            isValid = false;
        }

        if(checkLength(messageInput.value,0)){
            messageError.style.display = "none";
            
        } else {
            messageError.style.display = "block";
            isValid = false;
        }

        if(isValid){
            succMessage.style.display = "block";
            clearFormData();
            messageInput.value= "";
        } else {
            succMessage.style.display = "none";
        }
    })
}
validateForm();

// Character length checkers
function checkLength(characterAmount, requiredLength){
    if(characterAmount.trim().length > requiredLength){
        return true;
    } else{
        return false;
    }
}

// Email validator
function validateEmail(email){
    const regEx = /\S+@\S+\.\S+/;
    const emailMatch = regEx.test(email);
    return emailMatch;
}

// Clear data after successful completion
function clearFormData(){
    nameInput.value = "";
    subjectInput.value = "";
    emailInput.value = "";
    addressInput.value = "";
    setTimeout(function(){
        succMessage.style.display = "none";
    }, 5000)
};