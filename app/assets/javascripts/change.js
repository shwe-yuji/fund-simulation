$(document).on('turbolinks:load', function(){

  $('.tab-list li').on('click', function(){
    var tab_index = $(this).attr('id').replace('tab', "");

    $('.tab-list__active-tab').attr('class', 'tab-list__tab');
    $(this).attr('class', 'tab-list__active-tab');
    
    $('.inputform-and-result__inputform__active-table').attr('class', 'inputform-and-result__inputform__table');
    $('.inputform-and-result__inputform__table').eq(tab_index-1).attr('class', 'inputform-and-result__inputform__active-table');
  });
});