console.log('---path / fs / child_process / global---')

const path = require('path')
console.log(path.join('/test1', 'test2', 'test3/test4', 'test5', '..'))
console.log(path.parse('W:/test1/test2/file.txt'))

const fs = require('fs')
fs.readFile('test.txt', 'utf8',
  function (error, data) {
    console.log('Async')
    if (error) throw error
    console.log(data)
  })

console.log('Sync')
let fileContent = fs.readFileSync('test.txt', 'utf8')
console.log(fileContent)

fs.writeFileSync('test.txt', 'writeFileSync')

fs.writeFile('test.txt', 'writeFile', function (error) {
  if (error) throw error
  console.log('Async write and read')
  let data = fs.readFileSync('test.txt', 'utf8')
  console.log(data)
})

const execFile = require('child_process').execFile

execFile('test.bat', (error, stdout, stderr) => {
  if (error) {
    throw error
  }
  console.log(stdout)
})

require('./global.js')
console.log(global.test)