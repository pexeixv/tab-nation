var contentful = require('contentful')
require('dotenv').config()

var client = contentful.createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
})

module.exports = () => {
    return client
        .getEntries({
            content_type: "faQs",
        })
        .then(response=>response.items.sort((a,b)=>new Date(a.sys.createdAt) - new Date(b.sys.createdAt)))
        // .then(response=>  response.items.map(item =>item.fields) )
        .catch(console.error)
}

