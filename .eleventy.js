var sortByIndex = values => {
    let vals = [...values]
    return vals.sort((a, b) => Math.sign(a.data.index - b.data.index))
}
module.exports = eleventyConfig => {
    eleventyConfig.addFilter('sortByIndex', sortByIndex)
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