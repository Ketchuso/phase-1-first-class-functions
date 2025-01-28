function receivesAFunction(callback){
    callback();
}

receivesAFunction(function(){
    console.log("heya");
});

function returnsANamedFunction(){
    return yo;
}

function yo(){
    return "Hello there!";
}

function returnsAnAnonymousFunction(){
    return function(){
        console.log("Hiya");
    }
}