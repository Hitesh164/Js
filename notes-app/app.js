const validator=require('validator');
const yargs=require('yargs');
const chalk=require('chalk');
const notes=require('./notes.js');
///const command=process.argv[2];
//console.log(process.argv);
//console.log(yargs.argv);
yargs.version ('1.1.0');
yargs.command({
    command: 'add',
    describe: 'add a new note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: "string"
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: "string"
        }
    },
    handler : function(argv){
        notes.addNote(argv.title, argv.body);
    }
})
yargs.command({
    command: 'remove',
    description: 'remove a  note',
    handler : function(){
        console.log("ramoving a note");
    }
})

yargs.command({
    command: "List",
    description: "List the note",
    handler: function()
    {
        console.log("Listing the note");
    }
})

yargs.command({
    command: "read",
    description: "read the note",
    handler: function()
    {
        console.log("reading  the note");
    }
})
yargs.parse();
//console.log(yargs.argv)









// if(command=== 'add')
// {
//     console.log("Node is added");
// }
// const msg=getNotes();
// console.log(msg);
// console.log(chalk.blue.bold.bgYellow("Success"));

// console.log(process.argv[2])
//console.log(validator.isURL('https:/www.npmjs.compackagevalidtor'))

//M-3,L-3// const add=require('./utils.js')
// sum=add(4,-2);
// console.log(sum);