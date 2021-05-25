import request from 'superagent'

const rootUrl = '/api/v1'

export function getWords () {
    return request.get(rootUrl + '/words')
    .then(res => {
        return res.body
    })
}

// export function getWordByUserId (id) {
//     return request.get(rootUrl + '/words/' + id)
//     .then(res => {
//         return res.body
//     })
// }

export function addWords (words) {
    return request.post(rootUrl + '/words')
    .send(words)
    .then(res => {
        return res.body
    })
}

export function deleteWords (id) {
    return request.delete(rootUrl + '/words/' + id)
    .then(res => {
        return res.body
    })
}

export function updateWords (id, word) {
    return request.patch(rootUrl + '/words/' + id)
    .send(word)
    .then(res => {
        return res.body
    })
}