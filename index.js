const fs = require('fs');
const request = require('request');

function isPalindrome(str) {
  const reversed = str.split('').reverse().join('');
  return str === reversed;
}

function listFilesInDirectory(path) {
  fs.readdir(path, (err, files) => {
    if (err) throw err;
    console.log(files);
  });
}

function readFileContents(path) {
  fs.readFile(path, 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
  });
}

function makeHttpRequest(url) {
  request(url, (error, response, body) => {
    if (error) throw error;
    console.log('Status:', response.statusCode);
    console.log('Body:', body);
  });
}

// Usage Examples
console.log(isPalindrome('racecar')); // true
console.log(isPalindrome('hello')); // false
listFilesInDirectory('./');
// Output: [ 'example.js', 'node_modules', 'package-lock.json', 'package.json' ]

readFileContents('example.txt');
// Output: Contents of example.txt file

makeHttpRequest('https://jsonplaceholder.typicode.com/todos/1');
// Output: Status: 200
//         Body: JSON response from the URL
