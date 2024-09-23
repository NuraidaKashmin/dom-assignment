function getValueById(id) {
    return parseFloat(document.getElementById(id).value);
  }

function setInputValueById(id, valueToSet) {
    document.getElementById(id).value = valueToSet;

}
function setInputTextById(id, valueToSet) {
    document.getElementById(id).innerText = valueToSet;
}

let donateBtn = document.getElementById('donateBtn');
    let donatedBalanceElement = document.getElementById('donatedBalance');
    let mainBalanceElement = document.getElementById('mainBalance');

donateBtn.addEventListener('click', function(){
    let inputMoney = getValueById('inputMoney')

    if(inputMoney <= 0 || isNaN(inputMoney)){
        alert('Insert Positive Number Only');
        //document.getElementById('myModal').classList.add('hidden');
        setInputValueById('inputMoney', '');
        //return;
    } else if(inputMoney === ''){
        alert('Insert Positive Number Only');
        //document.getElementById('myModal').classList.add('hidden');
        setInputValueById('inputMoney', '');
        //return;
    } else {

        let donatedBalance = parseFloat(donatedBalanceElement.innerText);
        let totalDonate = inputMoney + donatedBalance;
        setInputTextById('donatedBalance', totalDonate)
        donatedBalanceElement.innerText = Number(totalDonate).toFixed(2);
        setInputValueById('inputMoney', '');
        let mainBalance = parseFloat(mainBalanceElement.innerText);
        let remainBalance = mainBalance - inputMoney;
        mainBalanceElement.innerText = Number(remainBalance).toFixed(2);
    
        if(inputMoney > remainBalance){
            alert('Insufficient Balance!');
            document.getElementById('myModal').classList.add('hidden');
            setInputValueById('inputMoney', '');
            return;
                    
        }
        
    // working
        let titleOne = document.getElementById('titleOne').innerText;
        let historyItm = document.createElement("div");
        historyItm.className = 'rounded-lg border-2 border-secondary';
        historyItm.innerHTML = `
            <p>${inputMoney} Taka is Donated for ${titleOne}</p>
            <p>Date: ${new Date().toLocaleDateString()}</p>
            
        `; 
        let historyContent = document.getElementById('historyContent');
        console.log(historyContent)
    
        historyContent.insertBefore(historyItm, historyContent.firstChild);

        myModal.showModal();
    }



// ------------------

})
// <p>Date: ${new Date().toString()}</p>

// donation to history and vise versa

let historyBtn = document.getElementById('historyBtn');
let donationBtn = document.getElementById('donationBtn');
historyBtn.addEventListener('click',function(){

    historyBtn.classList.add( 'bg-primary');
    historyBtn.classList.remove('border-2', 'border-secondary')

    donationBtn.classList.remove('bg-primary');
    donationBtn.classList.add('border-2', 'border-secondary')

    document.getElementById('main').classList.add('hidden');


})
donationBtn.addEventListener('click', function(){
    donationBtn.classList.add( 'bg-primary');

    historyBtn.classList.remove( 'bg-primary');

    document.getElementById('main').classList.remove('hidden');

})