
// dichiaro il contenitore
const container = document.querySelector(".grid_container");

// dichiaro il pulsante
const btn = document.querySelector(".btn");

// dichiaro la difficolta'
const difficulty = document.getElementById('difficulty');


// il bottone deve generare la griglia

btn.addEventListener('click',

    function(){

        container.innerHTML="";

        // impostiamo la difficolta e il livello tramite griglia
        let level = 0;
        if (difficulty.value === "ez") {
            level = 101;
        };
        if (difficulty.value === "medium") {
            level = 82;
        };
        if (difficulty.value === "hard") {
            level = 50;
        };
        
        // ora creiamo il ciclo infinito
        for ( let i = 1; i < level; i++ ){

              // creo l'elemento div
            const mioElemnt = document.createElement('div');
            mioElemnt.innerHTML += `${i}`;
            container.append(mioElemnt);

            // aggiungiamo la classe box
            mioElemnt.classList.add('box');

            //aggiungo la classe toggle
            mioElemnt.addEventListener('click',
                function(){
                    mioElemnt.classList.toggle('clicked');
                    console.log(i)
                });

            if (difficulty.value === "ez") {
                level = 101;
                mioElemnt.classList.add('width-easy')
            };
            if (difficulty.value === "medium") {
                level = 82;
                mioElemnt.classList.add('width-medium')
            };
            if (difficulty.value === "hard") {
                level = 50;
                mioElemnt.classList.add('width-hard')
            };
            
        };
});




