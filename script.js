const wrapper=document.querySelector('.wrapper');
const loginLink=document.querySelector('.login-link');
const registerLink=document.querySelector('.register-link');
const btnPopup=document.querySelector('.btnLogin-popup');
const icon= document.querySelector('.icon-close')
registerLink.addEventListener('click',()=>{
    wrapper.classList.add('active');
});
loginLink.addEventListener('click',()=>{
    wrapper.classList.remove('active');
});
btnPopup.addEventListener('click',()=>{
    wrapper.classList.add('active-popup');
});
icon.addEventListener('click',()=>{
    wrapper.classList.remove('active-popup');
});

function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('show');
}
