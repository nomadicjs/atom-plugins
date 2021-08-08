console.log("YO")
modules = [
  require('./format-text-table'),
]

module.exports = {
  activate: function() {
    for(m in modules) {
      modules[m].activate()
    }
  },
  deactivate: function() {
    for(m in modules) {
      modules[m].deactivate()
    }
  }
}