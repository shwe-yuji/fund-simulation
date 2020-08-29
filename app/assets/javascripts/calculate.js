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

  function prependPeriod(result_year, result_month){
    if (result_year < 1) {
      prependResult(Math.ceil(result_month) +  "ヶ月");
    }  else if (result_month < 1) {
      prependResult(Math.floor(result_year) + "年");
    }  else {
      prependResult(Math.floor(result_year) + "年" + Math.ceil(result_month) +  "ヶ月");
    }
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
      // 最終積立金額を計算
      if (monthly_deposit == 0 || (year == 0 && month == 0)) {
        window.alert("最終積立金額の算出には、毎月積立額および積立期間の入力が必須となります。ご入力いただき、再度「計算」ボタンをクリックしてください。");
        $('.inputform-and-result__inputform__table__list--input--return').val(0);
      } else if (Return == 0) {
        var result = times * monthly_deposit;
        prependResult(Math.floor(result) + "円");
      } else {
        var result = monthly_deposit * (1 + monthly_Return) * ((1 + monthly_Return) ** times - 1) / (monthly_Return);
        prependResult(Math.floor(result) + "円");
      }

    } else if (tab_index == 2) {
      // 毎月積立額を計算
      if (final_amount == 0 || (year == 0 && month == 0)) {
        window.alert("毎月積立額の算出には、最終積立金額および積立期間の入力が必須となります。ご入力いただき、再度「計算」ボタンをクリックしてください。");
        $('.inputform-and-result__inputform__table__list--input--return').val(0);
      } else if (Return == 0) {
        var result = final_amount / (year * 12 + month)
        if (result < 1) {
          window.alert("計算結果として、毎月積立額が１円未満となります。左記の条件をご確認いただき、再度ご入力ください。");
          return;
        }
        prependResult(Math.ceil(result) + "円");
      } else {
        var result = (final_amount * monthly_Return) / (1 + monthly_Return) / ((1 + monthly_Return) ** times - 1);
        if (result < 1) {
          window.alert("計算結果として、毎月積立額が１円未満となります。左記の条件をご確認いただき、再度ご入力ください。");
          return;
        }
        prependResult(Math.ceil(result) + "円");
      }

    } else if (tab_index == 3) {
      // 積立期間を計算
      if (final_amount == 0 || monthly_deposit == 0) {
        window.alert("積立期間の算出には、最終積立金額および毎月積立額の入力が必須となります。ご入力いただき、再度「計算」ボタンをクリックしてください。");
        $('.inputform-and-result__inputform__table__list--input--return').val(0);
      } else if (final_amount < monthly_deposit) {
        window.alert("毎月積立金額が最終積立金額を上回っています。。");
        $('.inputform-and-result__inputform__table__list--input--return').val(0);
      } else if (Return == 0) {
        var result = final_amount / monthly_deposit;
        var result_year = result / 12;
        var result_month = result % 12;
        prependPeriod(result_year, result_month);
      } else {
        var result = Math.log((final_amount * monthly_Return) / (monthly_deposit + monthly_deposit * monthly_Return) + 1) / Math.log(1 + monthly_Return);
        var result_year = result / 12;
        var result_month = result % 12;
        prependPeriod(result_year, result_month);
      }
    };
  });
});