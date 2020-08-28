$(document).on('turbolinks:load', function(){
  
  function reset(){
    // リセットしたいセレクタを取得
    var inputs = $('.inputform-and-result__inputform__table__list--input input');
    var result = $('.inputform-and-result__result--number');
    // リセット
    inputs.val("");
    result.empty();
  };

  $('.inputform-and-result__btns--reset-btn').on('click', function(){
    // リセットボタン
    reset();
  });

  $('.tab-list li').on('click', function(){
    // タブの切り替え時もフォームをリセットする
    reset();
  });
});

