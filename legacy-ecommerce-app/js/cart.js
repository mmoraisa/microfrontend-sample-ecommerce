$(document).ready(function() {

  $('form').unbind('submit').on('submit', function(evt) {

    evt.preventDefault();

    var purchased = '';

    $.each($(this).find('.product'), function(i, product) {

      purchased +=
        $(product).find('input[name="quantity"]').val() + ' '
        + $(product).attr('sku') + ' (' + $(product).find('.product__title').text() + ')\n';

    });

    alert('Congratulations! You just bought:\n' + purchased);

  });

  $.each($('#products-list .product'), function(i, product) {

    $(product).find('button[name="remove"]').on('click', function() {

      if($('#products-list .product').length > 1) {
        $(product).remove();
      }
      else {
        alert('You must leave at least one product in your cart.');
      }
    })

  });

});
