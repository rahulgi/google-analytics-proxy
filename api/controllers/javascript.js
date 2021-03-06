/**
 * getJavascript(req, res)
 *
 * @param {req} HTTP request
 * @param {res} HTTP response
 */
function getJavascript(req, res) {
  res
    .status(200)
    .header('Access-Control-Allow-Origin', '*')
    .header('Access-Control-Allow-Headers', 'Content-Type')
    .header('Content-Type', 'application/javascript')
    .header('Cache-Control', 'max-age=600')
    .render('gap', {
      serviceBaseUrl: process.env.SERVICE_BASE_URL
    });
}

module.exports = {
  getJavascript: getJavascript
};
