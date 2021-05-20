const fs = require('fs')
const axios = require('axios')

async function exec () {
    let array = fs.readFileSync(process.argv.slice(2)[0]).toString().replace(/\r/g, '').split('\n')
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
