$(document).ready(function() {
  $.get("http://ron-swanson-quotes.herokuapp.com/v2/quotes")
  .then(function(data){
    $('#quote').text('"' + data[0] + '"');
  })
})
