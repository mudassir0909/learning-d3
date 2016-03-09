(function() {
    var svg = d3.select('svg');
    var circles = svg.selectAll('circle').data([10, 20, 30]);

    circles.enter().append('circle');

    circles
        .attr('cx', function(d, i) { return (i+1)*100; })
        .attr('cy', 50)
        .attr('r', function(d) { return d; });

    circles.data([10, 20]).exit().remove();
})();
