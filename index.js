/**
 * Responds to any HTTP request.
 *
 * @param {!express:Request} req HTTP request context.
 * @param {!express:Response} res HTTP response context.
 */


function send(response, kwargs) {

  let data = kwargs.data || ''
  let status = kwargs.status || 200
  let contentType = kwargs.type || 'text/plain'

  if (['json', 'application/json'].includes(contentType)) {
    data = JSON.stringify(data)
  }

  response.status(status).type(contentType).send(data)
}


exports.mockResponse = (request, response) => {
  switch (request.path) {
    case '/status':
      return send(response, {status: request.query.code})
    case '/json':
      return send(response, {data: request.query, type: 'application/json'})
    case '/html':
      return send(response, {data: request.query.string, type: 'text/html'})
  }
}
