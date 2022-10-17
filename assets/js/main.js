/* L'utente clicca su un bottone che genererà una griglia di gioco quadrata. Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata. */

// click dell'utente


//prendo elemento grid
const gridEl = document.querySelector(`.grid`)
// const containerEl = document.querySelector(`.container`)

// decido grandezza griglia
const cellsNumber = 100;

// generazione singola cell
function generateMarkup(numb) {
    const cellElement = document.createElement('div')
    cellElement.className = "cell"
    cellElement.innerText = numb;
    return cellElement
}



// generazione griglia di gioco quadrata 10x10
generateField(cellsNumber, gridEl);
function generateField(max, domEl) {

    for (let i = 0; i <= cellsNumber; i++) {

        //const thisNumber = cellsNumber[i];
        const cellElement = generateMarkup(i);

        // inserisci il markup nel container
        domEl.insertAdjacentElement(`beforeend`, cellElement);

        // al click dell'utente la casella diventa blu
        cellElement.addEventListener('click', function(){
            
            this.classList.toggle("active")
            console.log(this);

        }
        )
        
    }

}


// ogni cella ha un numero progressivo da 1 a 100