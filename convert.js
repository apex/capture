
// TODO: pdf
// TODO: retina

var page = require('webpage').create()
var system = require('system')

var event = JSON.parse(system.args[1])

// clipping rect
page.clipRect = event.clip

// zoom factor
page.zoomFactor = event.zoom || 1

// viewport size
page.viewportSize = event.viewport || {
  width: 1024,
  height: 800
}

// render the page
page.open(event.url, function(status) {
  if (status != 'success') {
    console.log('error loading page')
    phantom.exit(1)
  }

  page.evaluate(function(color) {
    if (color) document.body.bgColor = color
  }, event.backgroundColor)

  window.setTimeout(function() {
    var format = event.format || 'png'
    system.stdout.write(page.renderBase64(format.toUpperCase()))
    phantom.exit()
  }, event.wait || 250)
})
