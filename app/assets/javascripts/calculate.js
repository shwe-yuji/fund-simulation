$(document).on('turbolinks:load', function(){
  
  function getElement(element, text){
    var slectors = $('.inputform-and-result__inputform__table__list--input--' + text);
    slectors.each(function(index, slector){
      element += $(slector).val();
    });
    return element - 0;
  };


  $('.inputform-and-result__btns--calculate-btn').on('click', function(){
    var monthly_deposit = 0; var monthly_deposit_text = 'monthly-deposit';
    var year = 0; var year_text = 'year';
    var month = 0; var month_text = 'month';
    var Return = 0; var Return_text = 'return';
    var final_amount = 0; var final_amount_text = 'final-amount';
    
    console.log(getElement(monthly_deposit, monthly_deposit_text));
    console.log(getElement(year, year_text));
    console.log(getElement(month, month_text));
    console.log(getElement(Return, Return_text));
    console.log(getElement(final_amount, final_amount_text));



    // var monthly_deposits = $('.inputform-and-result__inputform__table__list--input--monthly-deposit');
    // monthly_deposits.each(function(index, element){
    //   monthly_deposit += $(element).val();
    // })

    // var years = $('.inputform-and-result__inputform__table__list--input--year')
    // years.each(function(index, element){
    //   year += $(element).val();
    // })

    // var months = $('.inputform-and-result__inputform__table__list--input--month')
    // months.each(function(index, element){
    //   month += $(element).val();
    // })

    // var Returns = $('.inputform-and-result__inputform__table__list--input--return')
    // Returns.each(function(index, element){
    //   Return += $(element).val();
    // })

    // var final_amounts = $('.inputform-and-result__inputform__table__list--input--final-amount')
    // final_amounts.each(function(index, element){
    //   final_amount += $(element).val();
    // })
    
    // console.log(monthly_deposit - 0);
    // console.log(year - 0);
    // console.log(month - 0);
    // console.log(Return - 0);
    // console.log(final_amount - 0);
  });
});