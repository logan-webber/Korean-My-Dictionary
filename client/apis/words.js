import request from 'superagent'

const rootUrl = '/api/v1'

export function getWords () {
    return request.get(rootUrl + '/words')
    .then(res => {
        return res.body
    })
}