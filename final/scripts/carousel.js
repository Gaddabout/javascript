var fishing_pics;

jsLib.event.add( window, "load", function() {
    var options = {
        height: 500,
        maxAspect: .3,
        minSize: .4,
        maxSpeed: 4
    }
    fishing_pics = new Carousel("drum_pics", options);
});