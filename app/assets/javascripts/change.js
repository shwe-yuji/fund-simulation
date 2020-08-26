$(document).on('turbolinks:load', function(){
  $('.tab-list li').on('click', function(){
    // タブの番号を取得
    var tab_index = $(this).attr('id').replace('tab', "");

    // タブの切り替え
    $('.tab-list__active-tab').attr('class', 'tab-list__tab');
    $(this).attr('class', 'tab-list__active-tab');

    // タブの番号と同じフォームを表示
    $('.inputform-and-result__inputform__active-table').attr('class', 'inputform-and-result__inputform__table');
    $('.inputform-and-result__inputform__table').eq(tab_index-1).attr('class', 'inputform-and-result__inputform__active-table');

    // description
    // inputform-and-result__result--description
    $('.inputform-and-result__result--active-description').attr('class', 'inputform-and-result__result--description');
    console.log($('.inputform-and-result__result--description'))
    $('.inputform-and-result__result--description').eq(tab_index-1).attr('class', 'inputform-and-result__result--active-description');

    // conclusion
    $('.inputform-and-result__result--active-conclusion').attr('class', 'inputform-and-result__result--conclusion');
    console.log($('.inputform-and-result__result--conclusion'));
    $('.inputform-and-result__result--conclusion').eq(tab_index-1).attr('class', 'inputform-and-result__result--active-conclusion');
  });
});