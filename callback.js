fs=require('fs');

fs.readFile('foo.txt','utf8', function(err, data) {
  // If an error occurred, handle it (throw, propagate, etc)
  if(err) {
    console.log('Unknown Error');
    return;
  }
  // Otherwise, log the file contents
  console.log(data);
});
console.log('end of the program');
