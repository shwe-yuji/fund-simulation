$(document).on('turbolinks:load', function(){
  
  function getElement(element, text){
    var slectors = $('.inputform-and-result__inputform__table__list--input--' + text);
    slectors.each(function(index, slector){
      element += $(slector).val();
    });
    return element - 0;
  };

  function resultReset(){
    var result = $('.inputform-and-result__result--number');
    result.empty();
  };

  function prependResult(result){
    $('.inputform-and-result__result--number').prepend(result);
  };

  $('.inputform-and-result__btns--calculate-btn').on('click', function(){
    // 前回に出力された値をリセット
    resultReset();

    // 計算に使用する数値を取得 getElement(element, text)を使用
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

    var times = year * 12 + month;
    var monthly_Return = Return / 100.0 / 12.0;

    // タブ番号で処理を分岐
    var tab_index = $('.inputform-and-result__inputform__active-table').attr('id').replace('table', "");
    if (tab_index == 1) {
      // 最終積立額を計算
      var result = monthly_deposit * (1 + monthly_Return) * ((1 + monthly_Return) ** times - 1) / (monthly_Return);
      prependResult(Math.floor(result) + "円");

    } else if (tab_index == 2) {
      // 毎月積立額を計算
      var result = (final_amount * monthly_Return) / (1 + monthly_Return) / ((1 + monthly_Return) ** times - 1);
      prependResult(Math.ceil(result) + "円");

    } else if (tab_index == 3) {
      // 積立期間を計算
      var result = Math.log((final_amount * monthly_Return) / (monthly_deposit + monthly_deposit * monthly_Return) + 1) / Math.log(1 + monthly_Return);
      var result_year = result / 12;
      var result_month = result % 12;
      prependResult(Math.floor(result_year) + "年" + Math.ceil(result_month) +  "ヶ月");

    } else if (tab_index == 4) {
      // リターンを計算
      var result = 4;
      prependResult(result);
    };

  });
});