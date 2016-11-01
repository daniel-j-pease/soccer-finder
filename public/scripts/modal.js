console.log('modal.js connected');

$(document).ready( () => {
  //event listeners on open and close buttons
  $('.open').on('click', openModal);
  $('.close').on('click', closeModal);

  //display modal
  function openModal(e) {
    let hereModal = '#modal' + e.target.id.substr(4);
    let hereOther = '#other' + e.target.id.substr(4);
    $(hereModal).css('display', 'flex');
    $(hereOther).css('display', 'block');
  }

  //hide modal
  function closeModal(e) {
    let thereModal = '#modal' + e.target.id.substr(5);
    let thereOther = '#other' + e.target.id.substr(5);
    $(thereModal).hide();
    $(thereOther).hide();
  }
});
