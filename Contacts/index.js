//get all need elements from the DOM
const contact_form=document.querySelector('#contact-form');
const submit_btn=document.querySelector('.submit-btn');
const name_input=document.querySelector('#name');
const email_input=document.querySelector('#email');
const message_input=document.querySelector('#message');

//get needed data from email js
const public_key='KZ4rkUHh1EHIZ6dfQ';
const serviceID='service_049cb66';
const templateID='template_61s5vrf';

//initialize email js with public key
emailjs.init(public_key);

//add submit event to the form
contact_form.addEventListener('submit', e=>{
    //prevent form default behavior
    e.preventDefault();
    //get all input fields value
    const input_fields={
        name:name_input.value,
        email:email_input.value,
        message:message_input.value
    }
    //send email (add service, template IDs and input field values)
    emailjs.send(serviceID,templateID,input_fields).then(()=>{
        //change button
        // submit_btn.innerText='Message sent successfully';
        alert('Message sent successfully');
        //clear out all input fields
        name_input.value="";
        email_input.value="";
        message_input.value-"";
    }, (error)=>{
        console.log(error);
        submit_btn.innerText='Something went wrong';
    });
});