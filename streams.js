if(!fileSystem.existsSync('./docs/blog3.txt')) {
    console.log('The file is being created...')
    fileSystem.writeFile('./docs/blog3.txt', '//This file will be used alongside while studying about streams and buffer !', () => {
        console.log('File created Successfully...');
    })
} else {
    console.log('File blog3.txt arleady exist feel free to use it !!!')
};

const fileSystem = require('fs');

