let status = '1'; 
    //1: maak begin divs
        
    const container = document.getElementById("hello"); 
    console.log(container); 
        
    //run een for loop die 16*16 divs in de container genereert
    let j =16; //startgetal 1e ronde 
    for(i=0; i<j*j; i++){
        if(i>=0 && i<j*j){
            let width = 540/j; 
            let height = 540/j; 
            div2 = document.createElement('div');  
            div2.classList.add('special'); 
            div2.style.width= `${width}px`; 
            div2.style.height=`${height}px`; 
                
            /*console.log(div2);*/ 
            container.appendChild(div2);    
            } 
        }

    //2: Stel het hover effect in met de kleur zwart
        function changeColorWhite(e){
            if(e.target.matches('div')){//if = true //als er wordt mouseover op de div
            e.target.style.backgroundColor='white'; //verander dan van de target de kleur
            } 
        }

        for(i=0; i<j*j; i++){
            let getDiv = document.getElementsByTagName('div')[i]; 
            getDiv.addEventListener("mouseover", changeColorWhite);  
                    
        }
    //Schrijf een functie die de container leegmaakt: 
    function maakLeeg(){
        const hello = document.getElementById='hello'; 
        while(hello.hasChildNodes){
            hello.removeChild(hello.lastChild); 
        }
    }
    //Voeg een Button toe die de kleur rood maakt
    const buttonRood = document.querySelector('#colorRed'); 
    function changeColorRed(e){
            if(e.target.matches('div')){//if = true //als er wordt mouseover op de div
            e.target.style.backgroundColor='red'; //verander dan van de target de kleur
            e.target.style.border= '1px solid black'; 
            } 
        }

    function maakRood(){
        status="2"
        console.log(status); 
        for(i=0; i<j*j; i++){
            let getDiv = document.getElementsByTagName('div')[i]; 
            getDiv.addEventListener("mouseover", changeColorRed);         
        }
    }
    buttonRood.addEventListener('click', maakRood); 
    
    //Voeg een button toe die de kleur random/rainbow maakt: 
    const buttonRandom = document.querySelector('#colorRandom'); 
    function changeColorRandom(e){
            if(e.target.matches('div')){//if = true //als er wordt mouseover op de div
            e.target.style.backgroundColor='#'+ Math.floor(Math.random()*16777215).toString(16); //verander dan van de target de kleur
            e.target.style.border='0px'; 
            } 
        }

    function maakRandom(){
        status ='3'; 
        console.log(status); 
        for(i=0; i<j*j; i++){
            let getDiv = document.getElementsByTagName('div')[i]; 
            getDiv.addEventListener("mouseover", changeColorRandom);         
        }
    }
    buttonRandom.addEventListener('click', maakRandom); 

    //Voeg een button toe die alles weer zwart maakt: eraser: 
    const buttonEraser = document.querySelector('#eraser'); 
    function changeErase(e){
            if(e.target.matches('div')){//if = true //als er wordt mouseover op de div
            e.target.style.backgroundColor='black'; //verander dan van de target de kleur 
            e.target.style.border='none'; 
            } 
        }

    function maakErase(){
        status='1'; 
        console.log(status); 
        for(i=0; i<j*j; i++){
            let getDiv = document.getElementsByTagName('div')[i]; 
            getDiv.addEventListener("mouseover", changeErase);        
        }
    }
    buttonEraser.addEventListener('click', maakErase); 

    //Voeg een button toe die alles leeg maakt: clear:  
    const buttonClear = document.querySelector('#clear'); 
    buttonClear.addEventListener('click', removeKid); 
    buttonClear.addEventListener('click', caravan); 

    function caravan(){
        //clear
        for(i=0; i<j*j; i++){
            if(i>=0 && i<j*j){
                let width = 540/j; 
                let height = 540/j; 
                div2 = document.createElement('div'); 
                div2.classList.add('special'); 
                div2.style.width= `${width}px`; 
                div2.style.height=`${height}px`; 
                /*console.log(div2);*/ 
                container.appendChild(div2);    
            } 
        }
        //stelt afhangende van de status de juiste color in: 
        for(i=0; i<j*j; i++){
            if(status==='1'){
                let getDiv = document.getElementsByTagName('div')[i]; 
                getDiv.addEventListener("mouseover", changeColorWhite);  
            } else if(status==='2'){
                let getDiv = document.getElementsByTagName('div')[i]; 
                getDiv.addEventListener("mouseover", changeColorRed);      
            } else if(status==='3'){
                let getDiv = document.getElementsByTagName('div')[i]; 
                getDiv.addEventListener("mouseover", changeColorRandom); 
            }
        }

    }

    //SLIDER
    var slider = document.getElementById("myRange");
    var output = document.getElementById("demo");
    output.innerHTML = slider.value; // Display the default slider value

    // Update the current slider value (each time you drag the slider handle)
    slider.oninput = function() {
        output.innerHTML = this.value;
    }

    //Zorg ervoor dat de slider meeverandert: 
    const button2 = document.querySelector('.slider'); 
    button2.addEventListener('change', removeKid);
    button2.addEventListener('change', function changed(e){
        let vraag = slider.value; 
        if(vraag>90){
            alert('graag een getal onder de 64 invoeren'); 
        } else if(vraag === null){
            alert('vul aub wat in'); 
        } else if(vraag>0 && vraag<=64){
            j = vraag; 
        } else if(typeof vraag !== Number){
            alert('Vul aub een getal in kleiner of gelijk aan 100'); 
        }

        for(i=0; i<j*j; i++){
            if(i>=0 && i<j*j){
                let width = 540/j; 
                let height = 540/j; 
                div2 = document.createElement('div'); 
                div2.classList.add('special'); 
                div2.style.width= `${width}px`; 
                div2.style.height=`${height}px`; 
                /*console.log(div2);*/ 
                container.appendChild(div2);    
            } 
        }
        for(i=0; i<j*j; i++){
            let getDiv = document.getElementsByTagName('div')[i]; 
            getDiv.addEventListener("mouseover", changeColorWhite);  
                    
        }//sluiting for
    }) 
       
    //3: Voeg een Button toe die het Scherm leeg maakt en vraagt om prompt input   
    ///callback functie 2e argument: remove de elementen
    function removeKid(){
        const container = document.getElementById('hello'); 
        while(container.lastElementChild){
            container.removeChild(container.lastElementChild); 
        }
    }
