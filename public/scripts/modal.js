console.log('modal.js connected');
console.log($('#proof'));

$(document).ready( () => {

  $('.open').on('click', openModal);
  $('.close').on('click', closeModal);

  function openModal(e) {
    let hereModal = '#modal' + e.target.id.substr(4);
    $(hereModal).css('display', 'block');
  }

  function closeModal(e) {
    let thereModal = '#modal' + e.target.id.substr(4);
    $(thereModal).css('display', 'none');
  }

});
