$(document).on('turbolinks:load', function(){

  $('.tab-list li').on('click', function(){
    console.log('OK');
    var index = $('.tab-list__tab').index(this);
    $('.tab-list__active-tab').attr('class', 'tab-list__tab');
    $(this).attr('class', 'tab-list__active-tab');
    console.log(index);
  });
});