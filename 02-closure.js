/**
 * Created by Administrateur on 12/12/2016.
 */
const logClosure =function(msg){
    const interne = function(){
        console.log(msg);
    }
    return interne;
};

const hello = logClosure('Hello');

// la portée de hello est concervée
hello();

/*"Need a closure to correctly display i:*/
for(var i=0; i<3; i++){
    setTimeout(function timeoutHandler(){
        console.log(i);
    }, 1000)
}

/*"Use of closure to correctly display i:*/
for(var i=0; i<3; i++){
    setTimeout(
        logClosure(i)
        , 1000)
}

/*"Use ES6 to correctly display i:*/
for(let i=0; i<3; i++){
    setTimeout(function timeoutHandler(){
        console.log(i);
    }, 1000)
}