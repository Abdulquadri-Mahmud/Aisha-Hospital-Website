const password_icon1 = document.querySelector('#password_icon1');
const password_icon2 = document.querySelector('#password_icon2');
const lockIcon = document.querySelector('.lockIcon');
const email = document.querySelector('#email');
const passwordInput = document.querySelector('#passwordInput');
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
