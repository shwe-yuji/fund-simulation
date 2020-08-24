$(document).on('turbolinks:load', function(){
  
  function getElement(element, text){
    var slectors = $('.inputform-and-result__inputform__table__list--input--' + text);
    slectors.each(function(index, slector){
      element += $(slector).val();
    });
    return element - 0;
  };

  $('.inputform-and-result__btns--calculate-btn').on('click', function(){
    reset();
    // 計算に使用する数値を取得　getElement(element, text)を使用
    var monthly_deposit = 0; var monthly_deposit_text = 'monthly-deposit';
    var year = 0; var year_text = 'year';
    var month = 0; var month_text = 'month';
    var Return = 0; var Return_text = 'return';
    var final_amount = 0; var final_amount_text = 'final-amount';
    
    monthly_deposit = getElement(monthly_deposit, monthly_deposit_text);
    year = getElement(year, year_text);
    month = getElement(month, month_text);
    Return = getElement(Return, Return_text);
    final_amount = getElement(final_amount, final_amount_text);


    // タブ番号で処理を分岐
    var tab_index = $('.inputform-and-result__inputform__active-table').attr('id').replace('table', "");
    if (tab_index == 1) {
      var result = 1;
    } else if (tab_index == 2) {
      var result = 2;
    } else if (tab_index == 3) {
      var result = 3;
    } else if (tab_index == 4) {
      var result = 4;
    };
    
    console.log(result);
    $('.inputform-and-result__result--number').prepend(result);






    // console.log(getElement(monthly_deposit, monthly_deposit_text));
    // console.log(getElement(year, year_text));
    // console.log(getElement(month, month_text));
    // console.log(getElement(Return, Return_text));
    // console.log(getElement(final_amount, final_amount_text));

  });
});