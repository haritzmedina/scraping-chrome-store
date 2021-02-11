const scrapeIt = require("scrape-it");
const Papa = require('papaparse')
const fs = require('fs')
const axios = require('axios')

async function exec () {
    let array = fs.readFileSync('./highlight.csv').toString().replace(/\r/g, '').split('\n')
    array.pop()
    for (let i = 0; i < array.length; i++) {
        let url = array[i]
        axios(url).then((data) => {
            let result = url + ', ' + data.data.replace(/\n/g, ' ').replace(/\,/g, '')
            console.log(url + ', ' + result.substring(
                result.lastIndexOf("<noscript>"),
                result.lastIndexOf("</noscript>")
            ))
        })
        await sleep(1000 * Math.random())
    }

}

function sleep(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}

exec().then()

/*let scraped = array.forEach((url) => {
    axios(url).then((data) => {
        let result = url + ', ' + data.data.replace(/\n/g, ' ').replace(/\,/g, '')
        console.log(url + ', ' + result.substring(
            result.lastIndexOf("<noscript>"),
            result.lastIndexOf("</noscript>")
        ))
    })
    /*scrapeIt(url, {
        link: {
            selector: 'html'
        }
    }).then(({data, response}) => {
        console.log(url + ', ' + data.link.replace(/\n/g, ' ').replace(/\,/g, ''))
    })
})*/

/*var input = fs.createReadStream('annotation.csv');
readLines(input, (result) => {
    console.log(result)
    scrapeIt(result, {
        link: {
            selector: 'noscript'
        }
    }).then(({data, response}) => {
        console.log(result + ',' + data.link.replace(/\n/g, ' ').replace(/\,/g, ''))
    })
});

*/
