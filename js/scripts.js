$(document).ready(function () {
  console.log('scripts loaded');

  var url = './js/crashes-age-city.json';
  var crashes = '';

  $.ajax({
    type: 'GET',
    dataType: 'json',
    url: url,
    data: crashes,
    async: true,
    success: function (crashes) {
      console.log(crashes);
      // Chart 1
      var chart = new Taucharts.Chart({
        data: _(crashes)
          .chain()
          .reduce(function (memo, row) {
            memo[row.BikeAgeGrp] = memo[row.BikeAgeGrp] || {
              bikerAgeGroup: row.BikeAgeGrp,
              crashes: 0
            };
            memo[row.BikeAgeGrp].crashes += 1;
            return memo;
          }, {})
          .values()
          .value(),
        dimensions: {
          'bikerAgeGroup': { type: 'category', scale: 'ordinal' },
          'crashes': { type: 'measure', scale: 'linear' },
        },
        type: 'bar',
        x: 'bikerAgeGroup',
        y: 'crashes',
        plugins: [
          Taucharts.api.plugins.get('tooltip')({
            fields: ['bikerAgeGroup', 'crashes']
          })
        ]
      });
      chart.renderTo('#chart1');
    }
  });

  $.ajax({
    type: 'GET',
    dataType: 'json',
    url: url,
    data: crashes,
    async: true,
    success: function (crashes) {
      // Chart 2
      var chart = new Taucharts.Chart({
        data: _(crashes)
          .chain()
          .reduce(function (memo, row) {
            var k = row.BikeAgeGrp + row.City;
            memo[k] = memo[k] || {
              bikerAgeGroup: row.BikeAgeGrp,
              city: row.City,
              crashes: 0
            };
            memo[k].crashes += 1;
            return memo;
          }, {})
          .values()
          .value(),
        dimensions: {
          'bikerAgeGroup': { type: 'category', scale: 'ordinal' },
          'crashes': { type: 'measure', scale: 'linear' },
          'city': { type: 'category', scale: 'ordinal' }
        },
        type: 'bar',
        x: 'bikerAgeGroup',
        y: 'crashes',
        color: 'city',
        plugins: [
          Taucharts.api.plugins.get('tooltip')({
            fields: ['bikerAgeGroup', 'crashes', 'city']
          }),
          Taucharts.api.plugins.get('legend')()
        ]
      });
      chart.renderTo('#chart2');
    }
  });
});

// Sticky header disappears on scroll
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("header").style.top = "0";
  } else {
    document.getElementById("header").style.top = "-70px";
  }
  prevScrollpos = currentScrollPos;
}
