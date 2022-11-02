const modal  = document.querySelector('.modal-2');
const btnModal = document.querySelector('.btn-modal');
const btnCloseModal = document.querySelector('.btn-close-modal');

btnModal.addEventListener('click', function(){
    modal.showModal();
});

btnCloseModal.addEventListener('click', function(){
    modal.close()
});

$(document).ready(function(){
    $('.phone-input').mask('(00) 0000-0000');
    $('.cpf-input').mask('000.000.000-00', {reverse: true});
    $('.money-input').mask("#.##0,00", {reverse: true});
  });