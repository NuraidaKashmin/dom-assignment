function getValueById(id) {
    return parseFloat(document.getElementById(id).value);
  }

function getInnerTextById(id) {
    return parseFloat(document.getElementById(id).innerText);
  }

function setInputValueById(id, valueToSet) {
    document.getElementById(id).value = valueToSet;

}
function setInputTextById(id, valueToSet) {
    document.getElementById(id).innerText = valueToSet;
}

let donateBtn = document.getElementById('donateBtn');

donateBtn.addEventListener('click', function(){
    let inputMoney = getValueById('inputMoney')
    let donatedBalance = getInnerTextById('donatedBalance')
    let totalDonate = inputMoney + donatedBalance;
    setInputTextById('donatedBalance', totalDonate)
    setInputValueById('inputMoney', '');
    let mainBalance = getInnerTextById('mainBalance');
    let remainBalance = mainBalance - inputMoney;
    setInputTextById('mainBalance', remainBalance);
})