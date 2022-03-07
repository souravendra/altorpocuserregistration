const Result = require('folktale/result')

module.exports.execute = async query => new Promise((resolve) => {
    query
        .get()
        .then((data) => {
            resolve(Result.Ok(data))
        })
        .catch((error) => {
            resolve(Result.Error(error))
        })
})