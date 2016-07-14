
const proc = require('child_process')

/**
 * Perform a screen capture via PhantomJS.
 */

exports.handle = (event, ctx, cb) => {
  if (!event.url) return cb(new Error('.url required'))

  try {
    const args = ['convert.js', JSON.stringify(event)]
    const capture = proc.execFileSync('./phantomjs', args).toString()
    cb(null, { capture })
  } catch(err) {
    cb(err)
  }
}
