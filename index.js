var fromHTML = require('vdom-virtualize').fromHTML
var h = require('virtual-hyperscript')


module.exports = function (selector, html) {
  var wrapper
  if (typeof window == 'undefined') return h(selector, html)
  else {
    wrapper = h(selector)
    p = wrapper.properties
    return fromHTML('<' + wrapper.tagName + (p.id ? ' id="' + p.id + '"' : '') +
      (p.className ? ' class="' + p.className + '"' : '') + '>' + html + '</' + 
      wrapper.tagName + '>')
  }
}
