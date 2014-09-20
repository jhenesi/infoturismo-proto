'use strict';
 
describe('Unit: La directiva itChartBar', function() {
    beforeEach(module('itChart'));
 
  var element, svg, scope;
 
  beforeEach(inject(function($rootScope, $compile) {
    element = angular.element(
      '<it-chart-bar data="datos" width={{ancho}} height={{alto}}></it-chart-bar>'
    );
 
    scope = $rootScope.$new();
    scope.datos = [["a", 1],["b", 2],["c", 3], ["d", 4]];
    scope.ancho = 300;
    scope.alto = 100;

    element = $compile(element)(scope);
    scope.$apply();

    svg = d3.select(element[0]);
  }));
 
  it("debe ser remplazada por su template", function() {
    expect(element.prop('tagName')).not.toBe('IT-CHART-BAR');
  });

  it('debe contar con un "isolated scope"', function() {
    expect(element.isolateScope()).toBeDefined();
  });

  it('debe contener un elemento "g" dentro de un "svg"', function() {
    expect(element.children().length).toBe(1);

    expect(element.prop('tagName')).toBe('svg');
    expect(element.children().prop('tagName')).toBe('g');
  });

  it("debe contener una barra por cada elemento en los datos proporcionados", function() {
    expect(svg.select('g').selectAll('rect').size()).toBe(element.isolateScope().data.length);
  });

  it("debe de contar con barras con una separacion y un ancho equivalente", function(){
    var width = '66';
    var x = ['8','81','154', '227'];

    svg.select('g').selectAll('rect').each(function(d, i) {
      var bar = d3.select(this);
      expect(bar.attr('width')).toBe(width);
      expect(bar.attr('x')).toBe(x[i]);
    });
  });

  it("debe de contar con barras con una altura equivalente a los datos proporcionados", function(){
      var height = ['25','50','75','100'];
      var y = ['75','50','25','0'];

      svg.select('g').selectAll('rect').each(function(d, i) {
        var bar = d3.select(this);
        expect(bar.attr('height')).toBe(height[i]);
        expect(bar.attr('y')).toBe(y[i]);
      });
  });

  it("debe de contar con un eje x al fondo de la grafica", function(){
    
  });

  /*it('debe de ser capaz de cambiar de tamaño', function(){

    expect(svg.attr('width')).toBe('300');
    expect(svg.attr('height')).toBe('100');

    scope.ancho = 600;
    scope.alto = 200;

    scope.$apply();

    expect(svg.attr('width')).toBe('600');
    expect(svg.attr('height')).toBe('200');
  });*/
});