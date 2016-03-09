(function() {
    var data = [];

    setInterval(function() {
        if (data.length < 8) {
            data.push(Math.random());
        } else {
            data = [];
        }

        draw();
    }, 1000);


    function draw() {
        var svg = d3.select('svg');

        var circles = svg.selectAll('circle').data(data);

        circles.attr('fill', 'orange');

        circles
            .enter()
            .append('circle')
            .attr('fill', 'red')
            .attr('r', 40)
            .attr('cx', function(d, i) { return i * 100 + 50; })
            .attr('cy', 50);

        circles
            .style('stroke', 'black');

        circles
            .exit()
            .remove();
    }
})();
