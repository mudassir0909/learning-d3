(function() {
    var circles = d3.selectAll('circle');
    var data = [
        {cx: 50, cy: 50, r: 10, color: '#ff0000'},
        {cx: 150, cy: 50, r: 20, color: '#ff0066'},
        {cx: 250, cy: 50, r: 30, color: '#ff00aa'},
        {cx: 350, cy: 50, r: 40, color: '#ff00ff'},
    ]

    circles.data(data);

    circles
        .attr('stroke', 'black')
        .attr('fill', function(d) {return d.color;})
        .attr('r', function(d, i) {return d.r;})
        .attr('cx', function(d, i) {return d.cx;})
        .attr('cy', function(d, i) {return d.cy;})
        .attr('stroke-width', function(d, i) {return i*2;});
})();
