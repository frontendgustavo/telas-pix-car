const modalAddMoney  = document.querySelector('.modal-add-money');
const modalWithDraw = document.querySelector('.modal-withdraw-money');
const modalProfile = document.querySelector('.modal-profile');

const btnModalAddMoney = document.querySelector('.btn-add-money');
const btnModalWithDraw = document.querySelector('.btn-withdraw-money');
const btnModalProfile = document.querySelector('.btn-profile');

const btnCloseModalAddMoney = document.querySelector('.btn-close-add-money');
const btnCloseModalWithDraw = document.querySelector('.btn-close-withdraw-money');
const btnCloseModalProfile = document.querySelector('.btn-close-profile');

btnModalAddMoney.addEventListener('click', function(){
    modalAddMoney.showModal();
});

btnModalWithDraw.addEventListener('click', function(){
    modalWithDraw.showModal();
});
btnModalProfile.addEventListener('click', function(){
    modalProfile.showModal();
});
btnCloseModalAddMoney.addEventListener('click', function(){
   modalAddMoney.close()
});
btnCloseModalWithDraw.addEventListener('click', function(){
    modalWithDraw.close()
});
btnCloseModalProfile.addEventListener('click', function(){
    modalProfile.close()
});

$(document).ready(function(){
    $('.phone_with_ddd').mask('(00) 0000-0000');
    $('.cpf').mask('000.000.000-00', {reverse: true});
    $('.money-input').mask("#.##0,00", {reverse: true});
  });