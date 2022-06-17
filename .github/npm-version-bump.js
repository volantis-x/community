const fs = require('fs/promises')

const pageageFile = {
  "name": "@mhg/volantis-community",
  "description": "Volantis Community",
  "version": `1.0.${Date.now()}`,
  "license": "MIT",
  "repository": {
    "type": "git",
    "url": "git+https://github.com/volantis-x/community.git"
  },
  "author": "Volantis Community",
  "keywords": ["Volantis", "Community", "static"],
  "main": "LICENSE"
}

const pageageFileStr = JSON.stringify(pageageFile)
fs.writeFile('./public/package.json', pageageFileStr, 'utf8', (err) => {
  if (err) throw err
})

