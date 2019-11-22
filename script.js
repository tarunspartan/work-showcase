let boo = () => {
    setInterval(funCaller,2500);
}

var funCaller = () =>{
    image();
    imageTwo();
}

var i = 1; 
var image = () =>{
    document.documentElement.style.setProperty('--back-ground-image',`url('./images/${i}.jpg')`)
    if(i!=10){
        ++i;
    }else{
        i = 1;
    }
}

var j = 11; 
var imageTwo = () =>{
    document.documentElement.style.setProperty('--back-ground-image-two',`url('./images/${j}.png')`)
    if(j!=16){
        ++j;
    }else{
        j = 11;
    }
}
