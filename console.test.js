const consoleLT = require('./dist/log')

function sleep(ms) {
    return new Promise((resolve) => { setTimeout(resolve, ms) })
}

sleep(1500)
consoleLT.log('Hello World')
sleep(1500)
consoleLT.info('Hello World')
sleep(1500)
consoleLT.warn('Hello World')
sleep(1500)
consoleLT.error('Hello World')
sleep(1500)

console.log('(GLOBAL) Hello World')
sleep(1500)
console.info('(GLOBAL) Hello World')
sleep(1500)
console.warn('(GLOBAL) Hello World')
sleep(1500)
console.error('(GLOBAL) Hello World')
sleep(1500)