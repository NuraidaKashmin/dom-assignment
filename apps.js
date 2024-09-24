function getValueById(id) {
    return parseFloat(document.getElementById(id).value);
  }

function setInputValueById(id, valueToSet) {
    document.getElementById(id).value = valueToSet;

}
function setInputTextById(id, valueToSet) {
    document.getElementById(id).innerText = valueToSet;
}
let mainBalanceElement = document.querySelector('.mainBalance');
let donateBtn = document.getElementById('donateBtn');
    let donatedBalanceElement = document.getElementById('donatedBalance');
    // let mainBalanceElement = document.querySelector('.mainBalance');


donateBtn.addEventListener('click', function(){
    let inputMoney = getValueById('inputMoney')
    let mainBalance = parseFloat(mainBalanceElement.innerText);

    if(inputMoney <= 0 || isNaN(inputMoney)){
        alert('Insert Positive Number Only');
        setInputValueById('inputMoney', '');
    } else if(inputMoney === ''){
        alert('Insert Positive Number Only');
        setInputValueById('inputMoney', '');
    } else {

        let donatedBalance = parseFloat(donatedBalanceElement.innerText);
        // let mainBalance = parseFloat(mainBalanceElement.innerText);


        if(inputMoney > mainBalance){
            alert('Insufficient Balance!');
            setInputValueById('inputMoney', '');
            return;
                    
        }
        let totalDonate = inputMoney + donatedBalance;
        setInputTextById('donatedBalance', totalDonate)
        donatedBalanceElement.innerText = Number(totalDonate).toFixed(2);
        setInputValueById('inputMoney', '');
        let remainBalance = mainBalance - inputMoney;
        mainBalanceElement.innerText = Number(remainBalance).toFixed(2);
        

        let titleOne = document.getElementById('titleOne').innerText;
        let historyItm = document.createElement("div");
        historyItm.className = 'card lg:card-side bg-base-100 shadow-xl space-y-4 p-8 flex-col';
        historyItm.innerHTML = `
            <p class="text-xl text-secondary font-bold">${inputMoney} Taka is Donated for ${titleOne}</p>
            <p class="text-lg text-secondary">Date: ${new Date().toString()}</p>
            
        `; 
        let historyContent = document.getElementById('historyContent');
        console.log(historyContent)
    
        historyContent.insertBefore(historyItm, historyContent.firstChild);

        myModal.showModal();
    }
})


// card two

let donateBtnTwo = document.getElementById('donateBtnTwo');
let donatedBalanceTwoElement = document.getElementById('donatedBalanceTwo');

donateBtnTwo.addEventListener('click', function(){

    let inputMoneyTwo = getValueById('inputMoneyTwo')
    let donatedBalanceTwo = parseFloat(donatedBalanceTwoElement.innerText)
    let mainBalance = parseFloat(mainBalanceElement.innerText)


    if(inputMoneyTwo <= 0 || isNaN(inputMoneyTwo)){
        alert('Insert Positive Number Only');
        setInputValueById('inputMoneyTwo', '');
        return;
    } else if(inputMoneyTwo === ''){
        alert('Insert Positive Number Only');
        setInputValueById('inputMoneyTwo', '');
        return;
    } else if(inputMoneyTwo > mainBalance){
        alert('Insufficient Balance!');
        setInputValueById('inputMoneyTwo', '');
        return;              
    }

    let totalDonateTwo = inputMoneyTwo + donatedBalanceTwo;
    setInputTextById('donatedBalanceTwo', totalDonateTwo);
    donatedBalanceTwoElement.innerText = Number(totalDonateTwo).toFixed(2);

    setInputValueById('inputMoneyTwo', '');

    let remainBalanceTwo = mainBalance - inputMoneyTwo;
    mainBalanceElement.innerText = Number(remainBalanceTwo).toFixed(2);
    
    

    let titleTwo = document.getElementById('titleTwo').innerText;
    let historyItm = document.createElement("div");
    historyItm.className = 'card lg:card-side bg-base-100 shadow-xl space-y-4 p-8 flex-col';
    historyItm.innerHTML = `
        <p class="text-xl text-secondary font-bold">${inputMoneyTwo} Taka is Donated for ${titleTwo}</p>
        <p class="text-lg text-secondary">Date: ${new Date().toString()}</p>
        
    `; 
    let historyContent = document.getElementById('historyContent');
    console.log(historyContent)

    historyContent.insertBefore(historyItm, historyContent.firstChild);


    let modal = document.getElementById('myModalTwo');
    modal.showModal();

})

// card three


let donateBtnThree = document.getElementById('donateBtnThree');
let donatedBalanceThreeElement = document.getElementById('donatedBalanceThree');

donateBtnThree.addEventListener('click', function(){

    let inputMoneyThree = getValueById('inputMoneyThree')
    let donatedBalanceThree = parseFloat(donatedBalanceThreeElement.innerText)
    let mainBalance = parseFloat(mainBalanceElement.innerText)


    if(inputMoneyThree <= 0 || isNaN(inputMoneyThree)){
        alert('Insert Positive Number Only');
        setInputValueById('inputMoneyThree', '');
        return;
    } else if(inputMoneyThree === ''){
        alert('Insert Positive Number Only');
        setInputValueById('inputMoneyThree', '');
        return;
    } else if(inputMoneyThree > mainBalance){
        alert('Insufficient Balance!');
        setInputValueById('inputMoneyThree', '');
        return;              
    }

    let totalDonateThree = inputMoneyThree + donatedBalanceThree;
    setInputTextById('donatedBalanceThree', totalDonateThree);
    donatedBalanceThreeElement.innerText = Number(totalDonateThree).toFixed(2);

    setInputValueById('inputMoneyThree', '');

    let remainBalanceThree = mainBalance - inputMoneyThree;
    mainBalanceElement.innerText = Number(remainBalanceThree).toFixed(2);
    
    

    let titleThree = document.getElementById('titleThree').innerText;
    let historyItm = document.createElement("div");
    historyItm.className = 'card lg:card-side bg-base-100 shadow-xl space-y-4 p-8 flex-col';
    historyItm.innerHTML = `
        <p class="text-xl text-secondary font-bold">${inputMoneyThree} Taka is Donated for ${titleThree}</p>
        <p class="text-lg text-secondary">Date: ${new Date().toString()}</p>
        
    `; 
    let historyContent = document.getElementById('historyContent');
    console.log(historyContent)

    historyContent.insertBefore(historyItm, historyContent.firstChild);


    let modal = document.getElementById('myModalThree');
    modal.showModal();

})






// donation to history and vise versa

let historyBtn = document.getElementById('historyBtn');
let donationBtn = document.getElementById('donationBtn');
historyBtn.addEventListener('click',function(){

    historyBtn.classList.add( 'bg-primary');
    historyBtn.classList.remove('border-2', 'border-secondary')

    donationBtn.classList.remove('bg-primary');
    donationBtn.classList.add('border-2', 'border-secondary')

    document.getElementById('main').classList.add('hidden');
    document.getElementById('historyContainer').classList.remove('hidden');

})
donationBtn.addEventListener('click', function(){
    donationBtn.classList.add( 'bg-primary');
    donationBtn.classList.remove('border-2', 'border-secondary');

    historyBtn.classList.remove( 'bg-primary');
    historyBtn.classList.add('border-2', 'border-secondary');

    document.getElementById('main').classList.remove('hidden');
    document.getElementById('historyContainer').classList.add('hidden');

})