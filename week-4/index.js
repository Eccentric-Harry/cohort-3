const { Command } = require('commander');
const fs = require('fs');
const program = new Command();

program
  .name('words counter')
  .description('CLI to count words in a file')
  .version('1.0.0');

program.command('count')
  .description('count words in a file')
  .argument('<filePath>', 'path to the text file')
  .action((filePath)=>{
    fs.readFile(filePath, 'utf-8', (err, data)=>{
        if(err){
            console.error('Error reading file:', err);
            return;
        }else{
            const words = data.split(/\s+/).filter(word => word.length > 0);
            console.log(words);
            console.log(`Total words: ${words.length}`);
        }
    })
  })

program.parse();