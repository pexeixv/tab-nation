module.exports = eleventyConfig => {
    eleventyConfig.addPassthroughCopy('./src/styles')
    eleventyConfig.addPassthroughCopy('./src/js')
    eleventyConfig.addPassthroughCopy('./src/img')
    return {
        dir: {
            input: "src",
            output: "dist"
        }
    }
}