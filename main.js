//to define the button
const btn = document.getElementById('button-play');

//define the container
const container = document.getElementById('container_grid')

// the div announcement has to be deleted so we define it
let disappeared = document.getElementById('disappeared');

 // create and array of 16 bomb
const myArrNumRandom = genArrNumRandomMinMax(16, 1, 100);
console.log(myArrNumRandom)

// now the button must work
btn.addEventListener('click', function() {

    disappeared.parentNode.removeChild(disappeared);

    // create 100 grid using the for loop
    for (let i = 1; i < 101; i++) {
        
        // let's create the "div"
        let divElement = document.createElement("div");
        divElement.innerHTML = i;

        // now let's add the class "box" on the div
        divElement.classList.add('box');

        // and add all the divs in the html. 
        container.append(divElement);

        // once you click a number, if the arrNumRandom is included (it's duplicated) it's a bomb.
        // IF you click the bomb will appear an alert with an automatic reload of the page.
        // ELSE you can continue to play the game until you win.

        divElement.addEventListener('click', function(){
            if (myArrNumRandom.includes(i)) {
                alert('Ritenta')
                location.reload();
            } else {
                let points = document.getElementsByClassName('clicked').length;
                document.getElementById('title').innerHTML = `Il tuo punteggio: ${points}`;
                divElement.classList.add('clicked');
            }
        });

    }
});



// FUNCTIONS FOR GENERATE RANDOM NUMBERS
// this function genetare random numbers inside the div.box
function randomInteger(min, max) {
    return ( Math.floor(Math.random()* (max + 1) - min) + min);
}

function genArrNumRandomMinMax (howMany, minNum, maxNum) {

    // callback to the function
    let newNumber = randomInteger(minNum, maxNum);

    // generate an array of howMany elements
    const arrNum = [];

    while (arrNum.length < howMany) {

        // define again the newNumber because the old one is outside of the while
        let newNumber = randomInteger(minNum, maxNum);

        // if the newNumber is not inside of the arrNum, push it to the array
        if (!arrNum.includes(newNumber)) {
            arrNum.push(newNumber);
        }
    }

    return arrNum;


}
