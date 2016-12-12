/**
 * Created by Administrateur on 12/12/2016.
 */
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


var Jeu = function(min, max){

    this.min = min,
    this.max = max,

    this.jouer = function() {
        var me = this;
        const entierAlea = Math.floor(Math.random() * (this.max + this.min));
        const essais = [];

        if (essais.length) {
            console.log('Vous avez déjà joué : ' + essais.join(', '))
        }

        rl.question('Saisir un entier entre 0 et 100 : ', function(answer) {

            const entierSaisi = Number.parseInt(answer);

            if (Number.isNaN(entierSaisi)) {
                console.log('Il faut saisir un entier');
                return me.jouer();
            }

            essais.push(entierSaisi);

            if (entierSaisi < entierAlea) {
                console.log('Trop petit');
                return me.jouer();
            }

            if (entierSaisi > entierAlea) {
                console.log('Trop grand');
                return me.jouer();
            }

            console.log('Gagné !!!!');
            rl.close();
        });

    }

}


const jeu = new Jeu(0, 100);

jeu.jouer();

