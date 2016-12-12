/**
 * Created by Administrateur on 12/12/2016.
 */
const readline = require('readline');

let random = function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
};

const randomNumber = Math.floor(random(0,100));

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const play = function play(){
    rl.question('What do you think of Node.js? ', function(answer) {
        // TODO: Log the answer in a database
        console.log(`Thank you for your valuable feedback: ${answer}`);

        if(answer ==  randomNumber){
            console.log("Answer:" + answer + "=" + "Random:" + randomNumber);
            console.log("you win");
            rl.close();
        }else if(answer > randomNumber ){
            console.log("Answer:" + answer + ">" + "Random:" + randomNumber);
            play();
        }else{
            console.log("Answer:" + answer + "<" + "Random:" + randomNumber);
            play();
        }
    });
};

play();
