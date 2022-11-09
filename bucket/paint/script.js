function onMouseMove(event) {
  var path = new Path.Circle({
    center: event.middlePoint,
    radius: 10
  })
  path.fillColor = {
    hue: 0,
    saturation: 1,
    brightness: 1
  }
}
