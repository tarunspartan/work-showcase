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
    if(i!=11){
        ++i;
    }else{
        i = 1;
    }
}

var j = 21; 
var imageTwo = () =>{
    document.documentElement.style.setProperty('--back-ground-image-two',`url('./images/${j}.png')`)
    if(j!=26){
        ++j;
    }else{
        j = 21;
    }
}
