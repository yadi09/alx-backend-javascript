const express = require('express');

const { readFile } = require('fs');

const app = express();
const PORT = 1245;

function countStudents(fileName) {
  const stds = {};
  const flds = {};
  let length = 0;
  return new Promise((resolve, reject) => {
    readFile(fileName, (err, data) => {
      if (err) {
        reject(err);
      } else {
        let output = '';
        const lines = data.toString().split('\n');
        for (let i = 0; i < lines.length; i += 1) {
          if (lines[i]) {
            length += 1;
            const fld = lines[i].toString().split(',');
            if (Object.prototype.hasOwnProperty.call(stds, fld[3])) {
              students[field[3]].push(field[0]);
            } else {
              students[field[3]] = [field[0]];
            }
            if (Object.prototype.hasOwnProperty.call(flds, field[3])) {
              flds[field[3]] += 1;
            } else {
              flds[field[3]] = 1;
            }
          }
        }
        const l = length - 1;
        output += `Number of students: ${l}\n`;
        for (const [key, value] of Object.entries(flds)) {
          if (key !== 'field') {
            output += `Number of students in ${key}: ${value}. `;
            output += `List: ${stds[key].join(', ')}\n`;
          }
        }
        resolve(output);
      }
    });
  });
}

app.get('/', (request, response) => {
  response.send('Hello Holberton School!');
});
app.get('/students', (request, response) => {
  countStudents(process.argv[2].toString()).then((output) => {
    response.send(['This is the list of our students', output].join('\n'));
  }).catch(() => {
    response.send('This is the list of our students\nCannot load the database');
  });
});

app.listen(PORT, () => {
});

module.exports = app;
