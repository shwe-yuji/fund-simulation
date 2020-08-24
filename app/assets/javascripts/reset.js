$(document).on('turbolinks:load', function(){
  $('.inputform-and-result__btns--reset-btn').on('click', function(){
    // リセットしたいセレクタを取得
    var inputs = $('.inputform-and-result__inputform__table__list--input input');
    var result = $('.inputform-and-result__result--number');

    // リセット
    inputs.val("");
    result.empty();
  });
});

