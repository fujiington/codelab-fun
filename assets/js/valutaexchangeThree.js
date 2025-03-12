
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


// håndterer data behandling  (controller code fra MVC)
function makeExchange(myEuroRate, myDollarRate, myDanishAmount) {

    const euroRateNum = parseFloat(myEuroRate);
    const dollarRateNum = parseFloat(myDollarRate);
    const danishAmountNum = parseFloat(myDanishAmount);
}
    console.log('Beløb i euro: ' + euroResult);
    console.log('Beløb i dollar: ' + dollarResult);

    document.getElementById('euroResult').innerText = euroResult.toFixed(2);
    document.getElementById('dollarResult').innerText = dollarResult.toFixed(2);


// sub funktion der udfører en opgave og returnerer et resultat.  stadig controller code i MVC
function calculateExchange(myDanishAmount, exchangeRate) {
    return myDanishAmount * exchangeRate;
}


// viser resultatet  (view code fra MVC)
function showResult(myEuroResult, myDollarResult, myDanishAmount) {
    const resultElement = document.getElementById('result');
    resultElement.innerHTML = myDanishAmount + ' danske kroner bliver til: ' + myEuroResult + ' euro og ' + myDollarResult + ' dollars';

}







