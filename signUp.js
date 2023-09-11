const password_icon1 = document.querySelector('#password_icon1');
const password_icon2 = document.querySelector('#password_icon2');
const lockIcon = document.querySelector('.lockIcon');
const email = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const submitButton = document.querySelector('#submitButton');

password_icon1.addEventListener('click',()=>{
    let openPassword = passwordInput.getAttribute('type');
    if (openPassword === 'password') {
        passwordInput.setAttribute('type','text');
        password_icon1.style.display = 'none';
        password_icon2.style.display = 'block';
    }
});
password_icon2.addEventListener('click',()=>{
    let closePassword = passwordInput.getAttribute('type');
    if (closePassword === 'text') {
        passwordInput.setAttribute('type','password');
        password_icon1.style.display = 'block'
        password_icon2.style.display = 'none'
    }
});

// Confirm password
const confirmPasswordIcon1 = document.querySelector('#confirmPasswordIcon1');
const confirmPasswordIcon2 = document.querySelector('#confirmPasswordIcon2');
const confirmLockIcon = document.querySelector('.lockIcon');
const email2 = document.querySelector('#email');
const confirmPasswordInput = document.querySelector('#confirmpassword');

confirmPasswordIcon1.addEventListener('click',()=>{
    let openPassword = confirmPasswordInput.getAttribute('type');
    if (openPassword === 'password') {
        confirmPasswordInput.setAttribute('type','text');
        confirmPasswordIcon1.style.display = 'none';
        confirmPasswordIcon2.style.display = 'block';
    }
});
confirmPasswordIcon2.addEventListener('click',()=>{
    let closePassword = confirmPasswordInput.getAttribute('type');
    if (closePassword === 'text') {
        confirmPasswordInput.setAttribute('type','password');
        confirmPasswordIcon1.style.display = 'block'
        confirmPasswordIcon2.style.display = 'none'
    }
});

function confirmEmail(){
    if (email.value === '') {
        email.style.borderBottom = '2px solid red'
        if (email.value) {
            
        }
    }
}
submitButton.addEventListener('click',(e)=>{
    e.preventDefault();
    confirmEmail();
})