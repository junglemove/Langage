/**
 * Created by Administrateur on 12/12/2016.
 */
const readline = require('readline');

const random = function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
};

console.time("Random");
const randomNumber = random(0,100);
console.timeEnd("Random");
const arrayOfInputs = new Array();

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
/*
const play = function play(){
    rl.question('Enter a number? ', function(answer) {

        if(isNaN(answer)){
            throw Error("is not a number");// ne peut pas s'utiliser dans une callback !
                                            // console.log() à la place
        };

        if(answer ==  randomNumber){
            arrayOfInputs.push("Answer: " + answer + " = " + "Random: " + randomNumber);
            console.log("Answer: " + answer + " = " + "Random: " + randomNumber);
            console.log("you win");
            arrayOfInputs.forEach(function (item, index, array) {
                console.log(item, index);
            });
            rl.close();
        }else if(answer > randomNumber ){
            arrayOfInputs.push("Answer: " + answer + " > " + "Random: " + randomNumber);
            console.log("Answer: " + answer + " > " + "Random: " + randomNumber);
            play();
        }else{
            arrayOfInputs.push("Answer: " + answer + " < " + "Random: " + randomNumber);
            console.log("Answer: " + answer + " < " + "Random: " + randomNumber);
            play();
        }
    });
};

play();*/


rl.question('line', function (input) { //Déclanche sur un input + enter dans la console
    console.log(input);
})

