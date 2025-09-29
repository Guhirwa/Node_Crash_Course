const fileSystem = require('fs');

// reading file
fileSystem.readFile('./docs/blog1.txt', { encoding: 'utf8' }, (error, data) => {
    if(error) {
        console.log(error);
    }
    console.log(data);
})

// writing files
fileSystem.writeFile('./docs/blog1.txt', 'Hello Christian GUHIRWA we love you very much', () => {
    console.log('File content rewrited successful')
})

fileSystem.writeFile('./docs/blog2.txt', 'Hello new file...', () => {
    console.log('File created and written.')
})

// directories
if(!fileSystem.existsSync('./assets')) {
    fileSystem.mkdir('./assets',  (error) => {
    if(error) {
        console.log(error)
    }
    console.log('File created')
})
} else {
    fileSystem.rmdir('./assets', (error) => {
        if(error) {
            console.log(error)
        }
        console.log('file removed...')
    });
}

// deleting files
if(!fileSystem.existsSync('./docs')) {
    fileSystem.writeFile('./docs/newDocument.txt', 'This will be deleted if exist and vice versa', (error) => {
        if(error) {
            console.log(error)
        }
        console.log('New File created successfully')
    })
} else {
    fileSystem.unlink('./docs/newDocument.txt', (error) =>  {
        if(error) {
            console.log(error)
        }
        console.log('Deleted')
    })
}