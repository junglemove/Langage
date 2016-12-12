/**
 * Created by Administrateur on 12/12/2016.
 */
const readline = require('readline');

const random = function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
};

const randomNumber = random(0,100);

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const play = function play(){
    rl.question('Enter a number? ', function(answer) {

        if(isNaN(answer)){
            throw Error(e.stack);
        };

        if(answer ==  randomNumber){
            console.log("Answer: " + answer + " = " + "Random: " + randomNumber);
            console.log("you win");
            rl.close();
        }else if(answer > randomNumber ){
            console.log("Answer: " + answer + " > " + "Random: " + randomNumber);
            play();
        }else{
            console.log("Answer: " + answer + " < " + "Random: " + randomNumber);
            play();
        }
    });
};

play();
