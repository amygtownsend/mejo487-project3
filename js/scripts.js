$(document).ready(function (){
  console.log('scripts loaded');

  var prevScrollpos = window.pageYOffset;
  window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("header").style.top = "0";
    } else {
      document.getElementById("header").style.top = "-80px";
    }
    prevScrollpos = currentScrollPos;
  }

  // var url = './js/bicycle-crash-data-chapel-hill-region.json';
  // var crashes = '';
  //
  // $.ajax({
  //   type: 'GET',
  //   dataType: 'json',
  //   url: url,
  //   data: crashes,
  //   async: true,
  //   success: function(crashes){
  //     console.log(crashes);
  //     // Charts and table will go here
  //   }
  //
  // });
});
