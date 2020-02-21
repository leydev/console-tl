const consoleLT = require('./dist/log')

function sleep(ms) {
    return new Promise((resolve) => { setTimeout(resolve, ms) })
}

(async function test(ms) {
    consoleLT.log('Hello World')
    await sleep(ms)
    consoleLT.info('Hello World')
    await sleep(ms)
    consoleLT.warn('Hello World')
    await sleep(ms)
    consoleLT.error('Hello World')
    await sleep(ms)

    consoleLT.overwrite()

    console.log('(GLOBAL) Hello World')
    await sleep(ms)
    console.info('(GLOBAL) Hello World')
    await sleep(ms)
    console.warn('(GLOBAL) Hello World')
    await sleep(ms)
    console.error('(GLOBAL) Hello World')
})(1000)