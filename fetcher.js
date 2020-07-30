const request = require('request');
const fs = require('fs');
const url = process.argv.slice(2,5)[0];
const path = process.argv.slice(2,5)[1];

let fetcher = request(url, (error, response, body) => {
  if (error === 404 || error === 500) {
    return `Error ${error}, you request cannot be processed`
  };
  console.log('error:', error)
  // console.log('statusCode:',  response && response.statusCode);

  let page = ('body:', body);
  fs.writeFile(path, page, (err) => {
    if (err) throw err;

    console.log('Done!')
  });
});

fetcher;