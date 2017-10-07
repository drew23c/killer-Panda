var readline = require('readline');

var rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

function clear() {
    process.stdout.write('\u001B[2J\u001B[0;0f');
  }

var person ={
    name: 'Mick',
    turns:5
}
var panda = {
    name: 'Walking Panda',
}

console.log('WALKING PANDAS');
console.log('killer pandas are on the loose and worse..they can run on two legs. \nYour job is to find an exit from the zoo before it\'s too late');
console.log(`1 = North | 2 = East | 3 = South | 4 = West`);
console.log(`Press ENTER to continue`)

var directions = [1,2,3,4];


rl.on('line', function(input){

    
    if(input === '1'){
        clear();
        person.turns -= 1
        console.log(`${person.name} you're heading NORTH..keep going!!`)
        console.log(`You have ${person.turns} left`)
    }else if(input === '2'){
        clear();
        person.turns -= 1
        console.log(`${person.name} you're heading EAST..The KILLER PANDA is right on your tail!!`)
        console.log(`You have ${person.turns} left`)
    }else if(input === '3'){
        clear();
        person.turns -= 1
        console.log(`${person.name} you're heading SOUTH..Looks like you made the wrong turn!!`)
        console.log(`You have ${person.turns} left`)     
    }else if(input === '4'){
        clear();
        person.turns -= 1
        console.log(`${person.name} you're heading WEST..KEEP GOING!!`)
        console.log(`You have ${person.turns} left`)
    }



    var killerPanda = Math.floor(Math.random() * 4 + 1);
    if(input === killerPanda.toString()){
        clear();
        console.log('Surprise!!! The Panda has you!!! Prepare to be PANDERIZED')
        rl.close();
    }
   else if(person.turns === 0){
       clear();
        console.log('You made it out of the zoo alive!!!')
        rl.close();
    }else{
        rl.setPrompt(`North | East | South | West\n`);
        rl.prompt();
    }
});