import request from 'superagent'

const rootUrl = '/api/v1'

export function getLanguages () {
    return request.get(rootUrl)
    .then(res => {
        return res.body
    })
}