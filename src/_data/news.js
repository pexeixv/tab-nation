var contentful = require('contentful')
require('dotenv').config()

var client = contentful.createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
})

module.exports = () => {
    return client
        .getEntries({
            content_type: "news",
        })
        .then(response=>  response.items.map(item =>item.fields.newsArticle) )
        .catch(console.error)
}

