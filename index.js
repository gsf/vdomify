var fromHTML = require('vdom-virtualize').fromHTML
var h = require('virtual-hyperscript')


module.exports = function (selector, html) {
  var wrapper = h(selector)
  if (!html) return wrapper
  if (typeof window == 'undefined') return h(selector, html)
  else {
    p = wrapper.properties
    return fromHTML('<' + wrapper.tagName + (p.id ? ' id="' + p.id + '"' : '') +
      (p.className ? ' class="' + p.className + '"' : '') + '>' + html + '</' + 
      wrapper.tagName + '>')
  }
}
