class WeatherController {
  /*@ngInject*/

  constructor($stateParams, toastr, weatherService) {
    this.weatherService = weatherService;
    this.$stateParams = $stateParams;
    this.toastr = toastr;
    this.getCompetenceTypes();
  }

  /**
   * Retorna lista com todas competências
   * @return {*}
   */
  getCompetenceTypes() {
    return this.weatherService.getAllTypeCompetence().then(response => {
      this.model = response;
    });
  }
}

export default WeatherController;
