var { CompositeDisposable } = require('atom')

module.exports = {

  subscriptions: null,

  activate: function() {
    this.subscriptions = new CompositeDisposable()

    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'format-text-table:format': () => this.format()
    }))
  },

  deactivate: function() {
    this.subscriptions.dispose()
  },

  formatTable: function(text) {
    let lines = text.split('\n')
    start = 0
    while(lines[start].trim() == ''){
      start++
    }
    [, padding] = lines[start].match(/([^\w]*)/)
    maxLength = []
    let data = lines.map((l) => {
      return l.split('|').map((v, i) => {
        if(maxLength[i]===undefined) {
          maxLength[i]=0
        }
        v = v.trim()
        maxLength[i]=Math.max(maxLength[i],v.length)
        return v
      })
    })
    return data.map((r, ri) => {
      if(r.join(' ').trim().length == 0) {
        return lines[ri]
      } else {
        return padding + r.map((v, i) => v.padEnd(maxLength[i])).join(' | ').trim()
      }
    }).join('\n')
  },

  format: function() {
    let editor
    if (editor = atom.workspace.getActiveTextEditor()) {
      let selection = editor.getSelectedText()
      editor.insertText(this.formatTable(selection))
    }
  }
};
