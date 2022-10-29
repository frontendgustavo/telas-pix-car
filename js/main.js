const btnLogin = document.querySelector('.btn-login');
const btnSignIn = document.querySelector('.btn-sign-in');
const closeBtnLogin = document.querySelector('.close-btn-login');
const closeBtnSignIn = document.querySelector('.close-btn-sign-in');
const modalLogin = document.querySelector('.open-modal-login');
const modalSignIn = document.querySelector('.modal-2');

btnLogin.addEventListener('click', function () {
    modalLogin.showModal();
});
closeBtnLogin.addEventListener('click', function () {
    modalLogin.close()
});

btnSignIn.addEventListener('click', function () {
    modalSignIn.showModal();

});
closeBtnSignIn.addEventListener('click', function () {
    modalSignIn.close()
});

$(document).ready(function () {
    $('.phone-input').mask('(00) 0000-0000');
    $('.cpf-input').mask('000.000.000-00', {
        reverse: true
    });
    $('.money-input').mask("#.##0,00", {
        reverse: true
    });
});