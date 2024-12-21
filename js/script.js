const billInput = document.getElementById('amount');
const tips = document.querySelectorAll('.calculator button');
const customTip = document.getElementById('custom')
const personInput = document.getElementById('peopleNum')
const tipAmount = document.getElementById('tipAmount')
const total = document.getElementById('total')
const resetBtn = document.getElementById('reset')
const billError = document.getElementById('billError')
const personError = document.getElementById('personError')

resetBtn.addEventListener('click', () => {
    tipAmount.textContent = '$0.00'
    total.textContent = '$0.00'
    billInput.value = ""
    customTip.value = ""
    personInput.value = ""
})

const handleTip = (bill, tip, person) => {
    if (!bill) {
        billError.textContent = 'The amount is required';
        billInput.classList.add('error')
    } else if (!person) {
        personError.textContent = "Can't be zero"
        personInput.classList.add('error')
    } else {
        const intBill = Number(bill)
        const intTip = Number(tip)
        const intPerson = Number(person)

        const tipCal = intBill * intTip / 100

        const totalTip = tipCal / intPerson
        tipAmount.textContent = totalTip.toFixed(2)

        const totalAmount = (tipCal + intBill) / intPerson
        total.textContent = totalAmount.toFixed(2)
    }
}

customTip.addEventListener('keyup', (e) => {
    handleTip(billInput.value, e.target.value, personInput.value)
})

tips.forEach((tip) => {
    tip.addEventListener('click', (e) => {
        handleTip(billInput.value, e.target.id, personInput.value)
    })
})

billInput.addEventListener('focus', () => {
    billError.textContent = ""
    billInput.classList.remove('error')
})

personInput.addEventListener('focus', () => {
    personError.textContent = ""
    personInput.classList.remove('error')
})