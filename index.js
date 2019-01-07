const parse = require('csv-parse')
const stringify = require('csv-stringify')
const fs = require('fs')

const contents = fs.readFileSync('./export.txt', 'utf8')

parse(contents, {
  delimiter: '\t',
}, (err, output) => {
  if (err) {
    console.error('err parsing:', err)
    process.exit(1)
  }
  const transformed = output.map(item => {
    const title = item[0].substring(item[0].lastIndexOf('.') + 1)
    const website = item[3]
    const username = item[1]
    const password = item[2]
    const notes = item[12]
    return [title, website, username, password, notes]
  })

  stringify(transformed, (err, output) => {
    if (err) {
      console.error('err stringifying:', err)
      process.exit(1)
    }

    fs.writeFileSync('./import.csv', output)
  })
})

/*
 * 1password columns:
 * title,website,username,password,notes
 *
 * pwsafe columns: 
Group/Title
Username
Password
URL
Created Time
Password Modified Time
Record Modified Time
Password Policy
Password Policy Name
History
e-mail
Symbols
Notes
*/
