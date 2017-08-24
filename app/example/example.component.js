import exampleHtml from './example.html';

let exampleComponent = {
  template: exampleHtml,
  controllerAs: 'vm',
  controller: function(exampleService) {    
    const vm = this;
    vm.title = exampleService.title();   
  }

}

export default exampleComponent;
