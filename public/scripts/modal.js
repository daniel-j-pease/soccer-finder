console.log('modal.js connected');
console.log($('#proof'));

$(document).ready( () => {
  $('.button').on('click', showModal);
  $('.button').on('click', hideModal);

  function showModal(e) {
    let str = '#modal' + e.target.id
    console.log(str, $(str));
    $(str).css('display', 'block');
  }


  function hideModal(e) {
    let str = '#modal' + e.target.id
    console.log(str, $(str));
    $(str).css('display', 'block');
  }
});
