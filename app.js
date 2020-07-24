const fs = require('fs');
const yargs = require('yargs');
function loadDatas(path) {
    let data = fs.readFileSync(path);
    return JSON.parse(data.toString());
}
yargs
    .command({
        command: 'add',
        describe: 'Add note in file',
        builder: {
            title: {
                describe: "Title note",
                demandOption: true,
                type: "string"
            },
            body: {
                describe: "body note",
                demandOption: true,
                type: "string"
            },
        },
        handler: (argv) => {
            console.log("Add note in file");
            let notes = loadDatas('notes.json');
            notes.push(argv.title);
            notes.push(argv.body);
            fs.writeFile('notes.json',JSON.stringify(notes), (err) => {
                if(err) throw err;
                console.log("Nouvelle note créée");
            })
        }
    })
    .command({
        command: 'list',
        describe: 'List all notes',
        handler: () => {
            console.log("List all notes");
            let notes = loadDatas('notes.json');
            console.log(notes);
        }
    })
    .command({
        command: 'Remove',
        describe: 'remove specified note',
        handler: () => {
            console.log("Note removed");
        }
    })
    .command({
        command: 'Read',
        describe: 'Read specified note',
        handler: () => {
            console.log("List note");
        }
    })
    .argv