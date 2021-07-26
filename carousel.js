window.addEventListener("load",()=>{
    let images = ["plaza-armas-cusco.jpg", "peru.jpg", "tierra.jpg", "sistema solar.jpg", "via lactea.jpg"];

    
    let counter = 0;
    setInterval(() => { 
        if(counter <= 4){
            document.slider.src= `./IMG/${images[counter]}`;
            counter++;
        }
        else{
            counter = 0;
        }
    }, 5000);
});