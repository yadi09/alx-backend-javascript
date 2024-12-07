process.stdin.setEncoding('utf8');

process.stdout.write('Welcome to ALX, what is your name?\n');

process.stdin.on('data', (data) => {
    const name = data.trim(); // Remove any leading/trailing whitespace
    process.stdout.write(`Your name is: ${name}\n`); // Display the input name
});

process.stdin.on('end', () => {
    process.stdout.write('This important software is now closing\n');
});
