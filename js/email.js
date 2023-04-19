const contactForm = document.querySelector(".contactForm");
const contactName = document.querySelector("#name");
const contactEmail = document.querySelector("#email");
const contactMessage= document.querySelector("#message");
const messageAlert = document.querySelector('.messageAlert')

contactForm.addEventListener('submit',sendEmail = (e)=>{
    e.preventDefault();
    if(contactEmail!==""||contactMessage!==""|| contactName!==""){
        emailjs.sendForm("service_wimf7uo","template_nobi32q","#contactForm","rV--T7OC79x-rh9iC")
        .then(()=>{
            messageAlert.textContent = "message sent!"

            setTimeout(()=>{
                messageAlert.textContent = "";
                
            },5000)
        },(err)=>{
            messageAlert.textContent = `OOPS! SOMETHING HAS FAILED...`
            setTimeout(()=>{
                messageAlert.textContent = ""
            },5000)
        })
    }
    contactName.value = "";
    contactEmail.value = "";
    contactMessage.value = "";
    
});
