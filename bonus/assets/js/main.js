/* L'utente clicca su un bottone che genererà una griglia di gioco quadrata. Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata. */

// prendo il click dell'utente
const playDiff1 = document.querySelector(`.diff_1`);
const playDiff2 = document.querySelector(`.diff_2`);
const playDiff3 = document.querySelector(`.diff_3`);

// prendo elemento grid
const gridEl = document.querySelector(`.grid`);
// const containerEl = document.querySelector(`.container`)

// decido grandezza griglia
const cellsNumberDiff1 = 100;
const cellsNumberDiff2 = 81;
const cellsNumberDiff3 = 49;

// generazione singola cell
function generateMarkup(numb) {
    const cellElement = document.createElement('div')
    cellElement.className = "cell";
    cellElement.innerText = numb;
    return cellElement
}

// click play game diff 1
playDiff1.addEventListener('click', function(){

    // generazione griglia di gioco quadrata 10x10
    generateField(cellsNumberDiff1, gridEl);
    function generateField(max, domEl) {

        for (let i = 1; i <= cellsNumberDiff1; i++) {

            const cellElement = generateMarkup(i);

            // inserisci il markup nel container
            cellElement.classList.add('cellDiff1');
            domEl.insertAdjacentElement(`beforeend`, cellElement);

            // al click dell'utente la casella diventa blu
            cellElement.addEventListener('click', function(){
                
                this.classList.toggle("active");
                console.log(this);

            }
            )
            
        }

    }

}
)

// click play game diff 2
playDiff2.addEventListener('click', function(){

    // generazione griglia di gioco quadrata 10x10
    generateField(cellsNumberDiff2, gridEl);
    function generateField(max, domEl) {

        for (let i = 1; i <= cellsNumberDiff2; i++) {

            const cellElement = generateMarkup(i);

            // inserisci il markup nel container
            cellElement.classList.add('cellDiff2');

            domEl.insertAdjacentElement(`beforeend`, cellElement);

            // al click dell'utente la casella diventa blu
            cellElement.addEventListener('click', function(){
                
                this.classList.toggle("active");
                console.log(this);

            }
            )
            
        }

    }

}
)

// click play game diff 3
playDiff3.addEventListener('click', function(){

    // generazione griglia di gioco quadrata 10x10
    generateField(cellsNumberDiff3, gridEl);
    function generateField(max, domEl) {

        for (let i = 1; i <= cellsNumberDiff3; i++) {

            const cellElement = generateMarkup(i);

            // inserisci il markup nel container
            cellElement.classList.add('cellDiff3');

            domEl.insertAdjacentElement(`beforeend`, cellElement);

            // al click dell'utente la casella diventa blu
            cellElement.addEventListener('click', function(){
                
                this.classList.toggle("active");
                console.log(this);

            }
            )
            
        }

    }

}
)