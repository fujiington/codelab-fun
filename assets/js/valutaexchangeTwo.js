
//Dom elementer jeg har brug for
// knap til udregning
const calculateButton = document.getElementById('calculateButt');


calculateButton.addEventListener('click', (e) => {
    e.preventDefault();
    //alert('Jeg vil gerne kalde en funktion der kan regne valutaen ud...');
    gatherInputData();
});




// indsamling af data fra dom (model code fra MVC)
function gatherInputData() {
    const myEuroRate = document.getElementById('euroRate').value;
    const myDollarRate = document.getElementById('dollarRate').value;

    const myDanishAmount = document.getElementById('danishAmount').value;




    makeExchange(myEuroRate, myDollarRate, myDanishAmount);
}






// viser resultatet  (view code fra MVC)
function showResult(myEuroResult, myDollarResult, myDanishAmount) {
    const resultElement = document.getElementById('result');
    resultElement.innerHTML = myDanishAmount + ' danske kroner bliver til: ' + myEuroResult + ' euro og ' + myDollarResult + ' dollars';

}

/* skriv din kode herunder.*/

function makeExchange(myEuroRate, myDollarRate, myDanishAmount) {

    const euroRateNum = parseFloat(myEuroRate);
    const dollarRateNum = parseFloat(myDollarRate);
    const danishAmountNum = parseFloat(myDanishAmount);
}

    const euroResult = calculateExchange(danishAmountNum, euroRateNum);
    const dollarResult = calculateExchange(danishAmountNum, dollarRateNum);

    console.log('Beløb i euro: ' + euroResult);
    console.log('Beløb i dollar: ' + dollarResult);

function calculateExchange(myDanishAmount, exchangeRate) {
    return (myDanishAmount / exchangeRate).toFixed(2);
}
