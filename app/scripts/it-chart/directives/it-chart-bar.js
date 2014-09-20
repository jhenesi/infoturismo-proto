angular.module('itChart').directive('itChartBar', function(){
	// Runs during compile
	return {
		scope: {
			data: '=',
			width: '@',
			height: '@'
		},
		restrict: 'E',
		template: '<svg><g></g></svg>',
		replace: true,
		link: function(scope, el, attrs) {
			var data,
				margin,
				height,
				width,
				svg,
				graph,
				scaleX,
				scaleY,
				xAxis,
				yAxis;

			data = scope.data;

			if (!data) { return; }

			margin = { top: 20, right: 20, bottom: 30, left: 40 };

			width = scope.width - margin.left - margin.right;
            height = scope.height - margin.top - margin.bottom;

			svg = d3.select(el[0]);
			graph = svg.select('g');

			scaleX = d3.scale.ordinal()
               	.rangeRoundBands([0, width], 0.1);
            scaleX.domain(data.map(function (d) { return d[0]; }));   

         	scaleY = d3.scale.linear()
            	.range([height, 0]);           
			scaleY.domain([0, d3.max(data, function (d) { return d[1]; })]);

			xAxis = d3.svg.axis()
             	.scale(scaleX)
               	.orient("bottom");

            yAxis = d3.svg.axis()
        		.scale(scaleY)
         		.orient("left")
                .ticks(10, "%");

            graph.attr("transform", "translate(" + margin.left + "," + margin.top + ")");

            graph.append("g")
            	.attr("transform", "translate(0," + height + ")")
           		.call(xAxis);

           	graph.append("g")
            	.call(yAxis)
            	.append("text")
            	.attr("transform", "rotate(-90)")
            	.attr("y", 6)
         		.attr("dy", ".71em")
         		.style("text-anchor", "end")
       			.text("Frequency");

			graph.selectAll(".bar")
           		.data(data)
            	.enter().append("rect")
            	.attr("x", function (d) { return scaleX(d[0]); })
            	.attr("width", scaleX.rangeBand())
            	.attr("y", function (d) { return scaleY(d[1]); })
                .attr("height", function (d) { return height - scaleY(d[1]); });
		}
	};
});