import angular from 'angular';
import { getCitys } from '../../data/City';
import * as Highcharts from 'highcharts';

function WeatherController($scope, $stateParams, toastr, weatherService, $filter, $timeout) {
  /*@ngInject*/
  var vm = this;

  /**
   * Methods
   */
  vm.getCitysByCountry = getCitysByCountry;
  vm.search = search;

  /**
   * Constructor
   */
  constructor();

  function constructor() {
    vm.country = getCitys().estados;
  }

  /**
   * Return weather data
   * @return {*}
   */
  function getWeatherData(city) {
    vm.loading = true;
    return weatherService.getWeatherData(city).then(response => {
      vm.model = response;
    }).finally(() => {
      vm.loading = false;

      var temp = [];
      var max = [];
      var min = [];
      var week = [];

      angular.forEach(vm.model.list, (val) => {        
        week.push(getNameWeek(val.dt));
        temp.push(val.temp.day);
        max.push(val.temp.max);
        min.push(val.temp.min);
      });

      getChart(temp, max, min, week);
    });
  }

  function search(city) {
    getWeatherData(city);
  }

  function getNameWeek(date) {
    return $filter('translate')(moment.unix(date).format('dddd'));
  }

  function getCitysByCountry(country) {
    vm.city = $filter('filter')(vm.country, function (val) {
      if (val.sigla === country.sigla) {
        return val;
      }
    });
  }

  function getChart(temp, max, min, week) {
    $timeout(() => {
      Highcharts.chart('container', {
        chart: {
          type: 'spline'
        },
        title: {
          text: $filter('translate')('Week Temperature')
        },
        colors: ['#00ff00', '#ff0000', '#33ccff'],
        xAxis: {
          categories: week          
        },
        yAxis: {
          title: {
            text: $filter('translate')('Temperature')
          },
          labels: {
            formatter: function () {
              return this.value + '°';
            }
          }
        },
        tooltip: {
          crosshairs: true,
          shared: true
        },
        plotOptions: {
          spline: {
            marker: {
              radius: 4,
              lineColor: '#666666',
              lineWidth: 1
            }
          }
        },
        series: [{
          name: 'Temp',
          data: temp
        },
        {
          name: 'Max',
          data: max
        },
        {
          name: 'Min',
          data: min
        }]
      });
    }, 500);
  }

}

export default WeatherController;
