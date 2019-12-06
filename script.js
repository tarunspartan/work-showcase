let boo = () => {
    setInterval(funCaller,2500);
}

var funCaller = () =>{
    image();
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
