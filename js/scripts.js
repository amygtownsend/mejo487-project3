$(document).ready(function (){
  console.log('scripts loaded');

  var url = './js/bicycle-crash-data-chapel-hill-region.json';
  var crashes = '';

  $.ajax({
    type: 'GET',
    dataType: 'json',
    url: url,
    data: crashes,
    async: true,
    success: function(crashes){
      console.log(crashes);
      // Charts and table will go here
    }

  });
});
