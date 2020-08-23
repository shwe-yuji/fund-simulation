$(document).on('turbolinks:load', function(){
  $('.inputform-and-result__btns--reset-btn').on('click', function(){
    var inputs = $('.inputform-and-result__inputform__table__list--input input');
    var result = $('.inputform-and-result__result--number');
    inputs.val("");
    result.empty();
  });
});

