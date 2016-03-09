// Javascript Entry Point

import $ from 'jquery';

$('h2').on('click', function(event) {

  $('.bellow').addClass('collapse');
  
  // raw DOM node (or raw HTML element)
  var h2 = event.currentTarget;
  
  // wrapping it in jquery
  var $h2 = $(h2);

  // so we can use jquery's removeClass and parent functions
  $h2.parent().removeClass('collapse');

});
