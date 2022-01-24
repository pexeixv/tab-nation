var { documentToHtmlString  } = require('@contentful/rich-text-html-renderer')

var sortByIndex = values => {
    let vals = [...values]
    return vals.sort((a, b) => Math.sign(a.data.index - b.data.index))
}

var markedParse = array =>{
    return documentToHtmlString (array)
}

var gameFaqSort = array =>{
    itemsWithIndex = array.filter(a=>a.index)
    itemsWithoutIndex = array.filter(a=>!a.index)
    itemsWithoutIndexSorted = itemsWithoutIndex.sort((a, b) => a.question.localeCompare(b.question))
    newArray = []
    itemsWithIndex.forEach(i=>{
        if(i.index == 1)
            newArray.push(i)
    })
    newArray.push(itemsWithoutIndexSorted)
    itemsWithIndex.forEach(i=>{
        if(i.index == -1)
            newArray.push(i)
    })
    flatArray = newArray.flat()
    return flatArray
}

var faqSort = array =>{
    itemsWithIndex = array.filter(a=>a.index)
    itemsWithoutIndex = array.filter(a=>!a.index)
    newArray = []
    itemsWithIndex.forEach(i=>{
        if(i.index == 1)
            newArray.push(i)
    })
    newArray.push(itemsWithoutIndex)
    itemsWithIndex.forEach(i=>{
        if(i.index == -1)
            newArray.push(i)
    })
    flatArray = newArray.flat()
    return flatArray
}



module.exports = eleventyConfig => {
    eleventyConfig.addFilter('sortByIndex', sortByIndex)
    eleventyConfig.addFilter('gameFaqSort', gameFaqSort)
    eleventyConfig.addFilter('faqSort', faqSort)
    eleventyConfig.addFilter('marked', markedParse)
    eleventyConfig.addPassthroughCopy('./src/styles')
    eleventyConfig.addPassthroughCopy('./src/js')
    eleventyConfig.addPassthroughCopy('./src/img')
    eleventyConfig.addPassthroughCopy('./_redirects')
    return {
        dir: {
            input: "src",
            output: "dist"
        }
    }
}