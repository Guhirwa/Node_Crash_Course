import { readFile, writeFile, existsSync, mkdir, rmdir, unlink } from 'node:fs';

// reading file
readFile('./docs/blog1.txt', { encoding: 'utf8' }, (error, data) => {
    if(error) {
        console.log(error);
    }
    console.log(data);
})

// writing files
writeFile('./docs/blog1.txt', 'Hello Christian GUHIRWA we love you very much', () => {
    console.log('File content rewrited successful')
})

writeFile('./docs/blog2.txt', 'Hello new file...', () => {
    console.log('File created and written.')
})

// directories
if(!existsSync('./assets')) {
    mkdir('./assets',  (error) => {
    if(error) {
        console.log(error)
    }
    console.log('File created')
})
} else {
    rmdir('./assets', (error) => {
        if(error) {
            console.log(error)
        }
        console.log('file removed...')
    });
}

// deleting files
if(!existsSync('./docs')) {
    writeFile('./docs/newDocument.txt', 'This will be deleted if exist and vice versa', (error) => {
        if(error) {
            console.log(error)
        }
        console.log('New File created successfully')
    })
} else {
    unlink('./docs/newDocument.txt', (error) =>  {
        if(error) {
            console.log(error)
        }
        console.log('Deleted')
    })
}

let interval = 0;

setTimeout(() => {
    console.log("After 3 seconds");
}, 3000);

let int = setInterval(() => {
    interval++;
    console.log('After ' + interval + ' second(s)');
    if(interval === 4){
        clearInterval(int)
        console.log('TimeOut')
    }
}, 1000);
